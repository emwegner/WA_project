import {
  IonAvatar,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
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
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          {games.map((game, index) => {
            return (
              <IonItem routerLink={"dashboard/users/" + index}>
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

export default Home;
