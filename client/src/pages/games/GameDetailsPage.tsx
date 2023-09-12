import {
  IonActionSheet,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRouterLink,
  IonRow,
  IonSegment,
  IonSpinner,
  IonTextarea,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import gamesJson from "../../data/games.json";
import softwareJson from "../../data/software.json";
import steamDataJson from "../../data/steamdata.json";
import deverloperJson from "../../data/developers.json";

import { useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { camera, trash } from "ionicons/icons";
import { usePhotoGallery, UserPhoto } from "../../hooks/usePhotoGallery";

import axios from "axios";
import "swiper/css";

import "../../theme/Page.css";
import { ProgramEntry } from "../../components/ProgramEntry";

const GameDetailsPage: React.FC = () => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  const id = useParams<{ id: string }>().id;

  const gameJson = gamesJson.find((game) => String(game.steam_appid) === id);

  const softwareUsed = gameJson?.software_used;

  const gameSoftwareJson = softwareJson.filter((software) =>
    softwareUsed?.includes(software.name)
  );

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/steamdata/" + id)
      .then((response) => {
        setIsLoaded(true);
        setItems(response.data);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, []);

  if (!isLoaded) {
    return (
      <IonPage>
        <IonContent fullscreen>
          <IonSpinner name="crescent"></IonSpinner>
        </IonContent>
      </IonPage>
    );
  }

  let game:
    | {
        type: string;
        name: string;
        steam_appid: number;
        required_age: number;
        is_free: boolean;
        controller_support: string;
        dlc: number[];
        detailed_description: string;
        about_the_game: string;
        short_description: string;
        supported_languages: string;
        reviews: string;
        header_image: string;
        capsule_image: string;
        capsule_imagev5: string;
        website: string;
        pc_requirements: { minimum: string; recommended?: undefined };
        mac_requirements: { minimum: string; recommended?: undefined };
        linux_requirements: { minimum: string; recommended?: undefined };
        developers: string[];
        publishers: string[];
        price_overview: {
          currency: string;
          initial: number;
          final: number;
          discount_percent: number;
          initial_formatted: string;
          final_formatted: string;
        };
        packages: number[];
        package_groups: {
          name: string;
          title: string;
          description: string;
          selection_text: string;
          save_text: string;
          display_type: number;
          is_recurring_subscription: string;
          subs: {
            packageid: number;
            percent_savings_text: string;
            percent_savings: number;
            option_text: string;
            option_description: string;
            can_get_free_license: string;
            is_free_license: boolean;
            price_in_cents_with_discount: number;
          }[];
        }[];
        platforms: { windows: boolean; mac: boolean; linux: boolean };
        metacritic: { score: number; url: string };
        categories: { id: number; description: string }[];
        genres: { id: string; description: string }[];
        screenshots: {
          id: number;
          path_thumbnail: string;
          path_full: string;
        }[];
        movies: {
          id: number;
          name: string;
          thumbnail: string;
          webm: { "480": string; max: string };
          mp4: { "480": string; max: string };
          highlight: boolean;
        }[];
        recommendations: { total: number };
        achievements: {
          total: number;
          highlighted: { name: string; path: string }[];
        };
        release_date: { coming_soon: boolean; date: string };
        support_info: { url: string; email: string };
        background: string;
        background_raw: string;
        content_descriptors: { ids: never[]; notes: null };
        legal_notice?: undefined;
      }
    | {
        type: string;
        name: string;
        steam_appid: number;
        required_age: number;
        is_free: boolean;
        dlc: number[];
        detailed_description: string;
        about_the_game: string;
        short_description: string;
        supported_languages: string;
        reviews: string;
        header_image: string;
        capsule_image: string;
        capsule_imagev5: string;
        website: string;
        pc_requirements: { minimum: string; recommended: string };
        mac_requirements: { minimum: string; recommended: string };
        linux_requirements: { minimum: string; recommended: string };
        legal_notice: string;
        developers: string[];
        publishers: string[];
        price_overview: {
          currency: string;
          initial: number;
          final: number;
          discount_percent: number;
          initial_formatted: string;
          final_formatted: string;
        };
        packages: number[];
        package_groups: {
          name: string;
          title: string;
          description: string;
          selection_text: string;
          save_text: string;
          display_type: number;
          is_recurring_subscription: string;
          subs: {
            packageid: number;
            percent_savings_text: string;
            percent_savings: number;
            option_text: string;
            option_description: string;
            can_get_free_license: string;
            is_free_license: boolean;
            price_in_cents_with_discount: number;
          }[];
        }[];
        platforms: { windows: boolean; mac: boolean; linux: boolean };
        metacritic: { score: number; url: string };
        categories: { id: number; description: string }[];
        genres: { id: string; description: string }[];
        screenshots: {
          id: number;
          path_thumbnail: string;
          path_full: string;
        }[];
        movies: {
          id: number;
          name: string;
          thumbnail: string;
          webm: { "480": string; max: string };
          mp4: { "480": string; max: string };
          highlight: boolean;
        }[];
        recommendations: { total: number };
        release_date: { coming_soon: boolean; date: string };
        support_info: { url: string; email: string };
        background: string;
        background_raw: string;
        content_descriptors: { ids: never[]; notes: null };
        controller_support?: undefined;
        achievements?: undefined;
      }
    | {
        type: string;
        name: string;
        steam_appid: number;
        required_age: number;
        is_free: boolean;
        controller_support: string;
        detailed_description: string;
        about_the_game: string;
        short_description: string;
        supported_languages: string;
        header_image: string;
        capsule_image: string;
        capsule_imagev5: string;
        website: string;
        pc_requirements: { minimum: string; recommended: string };
        mac_requirements: { minimum: string; recommended: string };
        linux_requirements: { minimum: string; recommended: string };
        legal_notice: string;
        developers: string[];
        publishers: string[];
        price_overview: {
          currency: string;
          initial: number;
          final: number;
          discount_percent: number;
          initial_formatted: string;
          final_formatted: string;
        };
        packages: number[];
        package_groups: {
          name: string;
          title: string;
          description: string;
          selection_text: string;
          save_text: string;
          display_type: number;
          is_recurring_subscription: string;
          subs: {
            packageid: number;
            percent_savings_text: string;
            percent_savings: number;
            option_text: string;
            option_description: string;
            can_get_free_license: string;
            is_free_license: boolean;
            price_in_cents_with_discount: number;
          }[];
        }[];
        platforms: { windows: boolean; mac: boolean; linux: boolean };
        metacritic: { score: number; url: string };
        categories: { id: number; description: string }[];
        genres: { id: string; description: string }[];
        screenshots: {
          id: number;
          path_thumbnail: string;
          path_full: string;
        }[];
        movies: {
          id: number;
          name: string;
          thumbnail: string;
          webm: { "480": string; max: string };
          mp4: { "480": string; max: string };
          highlight: boolean;
        }[];
        recommendations: { total: number };
        achievements: {
          total: number;
          highlighted: { name: string; path: string }[];
        };
        release_date: { coming_soon: boolean; date: string };
        support_info: { url: string; email: string };
        background: string;
        background_raw: string;
        content_descriptors: { ids: never[]; notes: null };
        dlc?: undefined;
        reviews?: undefined;
      };

  if (error) {
    for (let i = 0; i < steamDataJson.length; i++) {
      if (String(steamDataJson[i].steam_appid) === id) {
        console.log(steamDataJson[i].steam_appid);
        game = steamDataJson[i];
      }
    }
  } else {
    //@ts-ignore
    game = items[id].data;
  }

  //@ts-ignore
  if (game && gameJson) {
    let jsonDevelopers = [];

    for (let i = 0; i < deverloperJson.length; i++) {
      for (let j = 0; j < deverloperJson[i].games.length; j++) {
        if (deverloperJson[i].games[j] === game.steam_appid) {
          jsonDevelopers.push(deverloperJson[i]);
        }
      }
    }

    console.log(jsonDevelopers);

    return (
      <IonPage>
        <IonContent fullscreen>
          <IonHeader>
            <IonCard style={{ height: "20vh" }}>
              <IonImg src={game.header_image}></IonImg>
            </IonCard>
          </IonHeader>

          <IonCard>
            <IonCardHeader>
              <IonCardTitle>{game.name}</IonCardTitle>
              <IonCardSubtitle>by {game.developers}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>{game.short_description}</IonCardContent>
            <IonCardContent>
              {gameJson.tags.map((tag) => (
                <IonRouterLink key={tag} href={`/games/filter/${tag}`}>
                  <IonChip key={tag} outline={true}>
                    {tag}
                  </IonChip>
                </IonRouterLink>
              ))}
            </IonCardContent>
          </IonCard>

          {gameJson.kickstarter_url && (
            <IonCard>
              <IonCardContent>
                <IonCardTitle>Kickstarter Campaign</IonCardTitle>
                <IonCardSubtitle>
                  <a href={gameJson.kickstarter_url}>
                    Click here to go to the Kickstarter Campaign
                  </a>
                </IonCardSubtitle>
              </IonCardContent>
            </IonCard>
          )}

          <IonCard>
            <IonCardContent>
              <IonListHeader>
                <IonCardTitle>Screenshots</IonCardTitle>
              </IonListHeader>

              <Swiper slidesPerView={1}>
                {game.screenshots.map(
                  (screenshot: {
                    id: React.Key | null | undefined;
                    path_full: string | undefined;
                  }) => (
                    <SwiperSlide key={screenshot.id}>
                      <IonImg
                        src={screenshot.path_full}
                        //@ts-ignore
                        alt={screenshot.id.toString()}
                      />
                    </SwiperSlide>
                  )
                )}

                {photos.map((photo, index) => {
                  if (photo.filepath.includes(String(game.steam_appid))) {
                    return (
                      <SwiperSlide key={index}>
                        <IonImg
                          onClick={() => setPhotoToDelete(photo)}
                          src={photo.webviewPath}
                        />
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
              <div className="ion-justify-content-center">
                <IonButton
                  style={{ marginTop: "10px" }}
                  onClick={() => takePhoto(game.steam_appid)}
                >
                  Add screenshot
                </IonButton>
              </div>
            </IonCardContent>
          </IonCard>

          {jsonDevelopers.length > 0 && (
            <IonCard>
              <IonList>
                <IonListHeader>
                  <IonCardTitle>Developed by</IonCardTitle>
                </IonListHeader>
                {jsonDevelopers.map((developer) => {
                  return (
                    <ProgramEntry
                      path="/developers/id/"
                      id={developer.id}
                      is_active={true}
                      title={developer.name}
                      description={`alias ${developer.professional_name}`}
                      image_url={developer.profile_image}
                    />
                  );
                })}
              </IonList>
            </IonCard>
          )}

          {gameSoftwareJson.length > 0 && (
            <IonCard>
              <IonList>
                <IonListHeader>
                  <IonCardTitle>Software used for {gameJson.name}</IonCardTitle>
                </IonListHeader>
                {gameSoftwareJson.map((entry) => (
                  <ProgramEntry
                    key={entry.id}
                    path="/software/id/"
                    id={entry.id}
                    is_active={true}
                    title={entry.name}
                    description={entry.description}
                    image_url={entry.thumbnail_url}
                  />
                ))}
              </IonList>
            </IonCard>
          )}

          <IonActionSheet
            isOpen={!!photoToDelete}
            buttons={[
              {
                text: "Delete",
                role: "destructive",
                icon: trash,
                handler: () => {
                  if (photoToDelete) {
                    deletePhoto(photoToDelete);
                    setPhotoToDelete(undefined);
                  }
                },
              },
              {
                text: "Cancel",
                icon: "close",
                role: "cancel",
              },
            ]}
            onDidDismiss={() => setPhotoToDelete(undefined)}
          />
        </IonContent>
      </IonPage>
    );
  }
};

export default GameDetailsPage;
