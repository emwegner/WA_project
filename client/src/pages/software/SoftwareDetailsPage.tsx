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
} from "@ionic/react";
import softwareJson from "../../data/software.json";
import gamesJson from "../../data/games.json";

import { useParams } from "react-router";
import { ProgramEntry } from "../../components/ProgramEntry";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import "../../theme/Page.css";

const SoftwareDetailsPage: React.FC = () => {
  const id = useParams<{ id: string }>().id;
  const software = softwareJson.find((entry) => String(entry.id) === id);

  // @ts-ignore
  const usedInGames = gamesJson.filter((game) =>
    game.software_used?.includes(software?.name)
  );

  console.log(usedInGames);

  if (software) {
    console.table(software);

    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader></IonHeader>

          <IonCard>
            <IonCardContent>
              <IonCardTitle>{software.name}</IonCardTitle>
              <p>{software.description}</p>
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonCardContent>
              <IonCardTitle>Tags</IonCardTitle>
              {software.tags.map((tag) => (
                <IonRouterLink key={tag} href={`/software/filter/${tag}`}>
                  <IonChip key={tag} outline={true}>
                    {tag}
                  </IonChip>
                </IonRouterLink>
              ))}
            </IonCardContent>
          </IonCard>

          <IonCard>
            <IonListHeader>
              <IonCardTitle>Screenshots</IonCardTitle>
            </IonListHeader>
            <IonCardContent>
              <Swiper slidesPerView={1}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  
                  }}
                  modules={[Pagination]}
                  className="mySwiper">
                {software.screenshot_urls.map((screenshot) => (
                  <SwiperSlide key={screenshot}>
                    <IonImg src={screenshot} alt={screenshot} class="softwareimages" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCardContent>
          </IonCard>

          {usedInGames.length > 0 && (
            <IonCard>
              <IonList>
                <IonListHeader>
                  <IonCardTitle>Games built using {software.name}</IonCardTitle>
                </IonListHeader>
                <IonCardContent>
                  {usedInGames.map((game) => (
                    <ProgramEntry
                      path="/games/id/"
                      id={game.steam_appid}
                      is_active={game.software_used !== undefined}
                      title={game.name}
                      description={`by ${game.developer}`}
                      image_url={game.header_image}
                    />
                  ))}
                </IonCardContent>
              </IonList>
            </IonCard>
          )}
        </IonContent>
      </IonPage>
    );
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

export default SoftwareDetailsPage;
