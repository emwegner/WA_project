import {
  IonButton,
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
  IonRouterOutlet,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import Games from "../games.json";
import { Redirect, Switch, Route } from "react-router";

type Game = {
  title: string;
  description: string;
  image: string;
  developer: string;
};

const GamesPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader></IonHeader>
        <IonCard>
          <IonCardContent>
            <IonList>
              {Games.map((game) => (
                <IonItem
                  routerLink={`/games/${game.steam_appid}`}
                  key={game.steam_appid}
                >
                  <IonThumbnail slot="start">
                    <img alt={game.name} src={game.header_image} />
                  </IonThumbnail>
                  <IonLabel>
                    <h2>{game.name}</h2>
                    <p>{game.developer}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GamesPage;
