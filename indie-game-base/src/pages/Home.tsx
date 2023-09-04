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
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem>
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>

              <IonItem lines="none">
                <IonThumbnail slot="start">
                  <img
                    alt="Silhouette of mountains"
                    src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                  />
                </IonThumbnail>
                <IonLabel>Item</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
