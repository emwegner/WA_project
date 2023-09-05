import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Games from "../games.json";

import { useParams } from "react-router";

const GamePage: React.FC = () => {
  const gameId = useParams<{ gameId: string }>().gameId;

  // Find the game with the given id
  const game = Games.find((game) => game.data.steam_appid === Number(gameId));

  console.log(game?.data.name);

  if (game) {
    return (
      <IonContent fullscreen>
        <IonHeader>
          <IonCard style={{ height: "20vh" }}>
            <IonImg src={game.data.header_image}></IonImg>
          </IonCard>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>{game.data.name}</IonCardTitle>
            <IonCardSubtitle>by {game.data.developers}</IonCardSubtitle>
            <p>{game.data.short_description}</p>

            <h3>Genres</h3>
            {game.data.genres.map((genre) => (
              <IonChip key={genre.id} outline={true} disabled>
                {genre.description}
              </IonChip>
            ))}
          </IonCardContent>
        </IonCard>
        <IonGrid>
          <IonRow>
            {game.data.screenshots.map((screenshot) => (
              <IonCol>
                <IonImg src={screenshot.path_full} key={screenshot.id}></IonImg>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonContent>
    );
  } else {
    <IonContent fullscreen>
      <IonHeader>
        <IonTitle>Game not found!</IonTitle>
      </IonHeader>
      <IonCard>
        <IonCardContent></IonCardContent>
      </IonCard>
    </IonContent>;
  }
};

export default GamePage;
