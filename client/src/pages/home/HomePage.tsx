import {
  IonCard,
  IonCardSubtitle,
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
  IonThumbnail,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
} from "@ionic/react";

import "../../theme/Page.css";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonCard style={{ height: "20vh" }}>
          <IonImg
            class="home_headerimg"
            src="https://static1.colliderimages.com/wordpress/wp-content/uploads/2021/07/indie-games.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5"
          ></IonImg>
        </IonCard>
        <IonToolbar>
          <IonCardHeader>
            <IonCardTitle>Indie Game Base</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Welcome to Indie Game Base, where you can look up all sorts of
            Information related to Indie Games and their Development!
          </IonCardContent>
        </IonToolbar>

        <IonGrid class="homeGrid">
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  alt="Indie Games"
                  src="https://indieplanet.de/wp-content/uploads/2022/01/Top100-IndieGames-2022jpg.jpg"
                />
                <IonCardHeader>
                  <IonCardTitle>Games</IonCardTitle>
                  <IonCardSubtitle>
                    Find out more about different Indie Games!
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonButton href="/games">Click here!</IonButton>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard>
                <img
                  alt="Sofware"
                  src="https://cdn.akamai.steamstatic.com/steam/apps/431730/ss_46a7e00325c8e3b8cea2cfecc414a4b777827d8e.1920x1080.jpg?t=1689786907"
                />
                <IonCardHeader>
                  <IonCardTitle>Software</IonCardTitle>
                  <IonCardSubtitle>
                    Find out more about different Software!
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonButton href="/software">Click here!</IonButton>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
