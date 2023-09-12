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
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/610b4c55-d68b-49c1-b8c0-55834b7aa7c0/dg8r0yj-ac52df15-5057-446a-8913-e90ec9d02d53.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxMGI0YzU1LWQ2OGItNDljMS1iOGMwLTU1ODM0YjdhYTdjMFwvZGc4cjB5ai1hYzUyZGYxNS01MDU3LTQ0NmEtODkxMy1lOTBlYzlkMDJkNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.cbL5rMkuHIA_J9dC1AHCccjjjVU7ZtMp8cTW1VGbxkQ"
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
              
                <IonImg
                  class="home_image_left"
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
                <IonImg
                  class="home_image_right"
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
