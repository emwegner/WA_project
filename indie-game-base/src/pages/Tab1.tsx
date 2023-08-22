import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonAvatar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";

const Tab1: React.FC = () => {
  const games = [
    {
      title: "Stardew Valley",
    },
    {
      title: "Cassette Beasts",
    },
    {
      title: "Dome Keeper",
    },
    {
      title: "Brotato",
    },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {games.map((game, index) => {
            return (
              <IonItem>
                <IonAvatar slot="start">
                  <img
                    src={"https://picsum.photos/80/80?random=" + index}
                    alt="avatar"
                  />
                </IonAvatar>
                <IonLabel>{game.title}</IonLabel>
              </IonItem>
            );
          })}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
