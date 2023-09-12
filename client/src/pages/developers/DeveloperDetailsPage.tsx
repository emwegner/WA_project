import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonThumbnail,
  IonTitle,
  isPlatform,
} from "@ionic/react";

import gamesJson from "../../data/games.json";
import developerJson from "../../data/developers.json";

import { useParams } from "react-router";
import { ProgramEntry } from "../../components/ProgramEntry";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

import "swiper/css";

const DeveloperDetailsPage: React.FC = () => {
  const id = useParams<{ id: string }>().id;

  const developer = developerJson.find((entry) => String(entry.id) === id);

  if (developer) {
    let games = [];

    for (let i = 0; i < gamesJson.length; i++) {
      for (let j = 0; j < developer.games.length; j++) {
        if (gamesJson[i].steam_appid === developer.games[j]) {
          games.push(gamesJson[i]);
        }
      }

      console.log(games);

      return (
        <IonPage>
          <IonContent fullscreen>
            <IonHeader></IonHeader>
            <IonCard>
              <IonCardContent>
                <IonCardTitle>{developer.name}</IonCardTitle>
              </IonCardContent>
            </IonCard>
            {!isPlatform("hybrid") && (
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName={developer.professional_name}
                options={{ height: 800 }}
              />
            )}

            <IonCard>
              <IonList>
                <IonListHeader>
                  <IonCardTitle>Games by {developer.name}</IonCardTitle>
                </IonListHeader>
                {games.map((game) => (
                  <ProgramEntry
                    path="/games/id/"
                    id={game.steam_appid}
                    is_active={game.software_used !== undefined}
                    title={game.name}
                    description={`by ${game.developer}`}
                    image_url={game.header_image}
                  />
                ))}
              </IonList>
            </IonCard>
          </IonContent>
        </IonPage>
      );
    }
  } else {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader> Software not found </IonHeader>
        </IonContent>
      </IonPage>
    );
  }
};

export default DeveloperDetailsPage;
