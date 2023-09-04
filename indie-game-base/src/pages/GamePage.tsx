import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
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
          <IonCardContent>{game.data.name}</IonCardContent>
        </IonCard>
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
