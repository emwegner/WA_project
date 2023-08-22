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
  IonRouterOutlet,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { RouteComponentProps, Route } from "react-router";

const UserDetailPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonButton>Default</IonButton>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

const DashboardPage: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonRouterOutlet>
        <Route exact path={match.url} component={Tab1} />
        <Route path={`${match.url}/users/:id`} component={UserDetailPage} />
      </IonRouterOutlet>
    </IonPage>
  );
};

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
              <IonItem routerLink={"tab1/users/" + index}>
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
