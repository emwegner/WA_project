import {
  IonActionSheet,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonCol,
  IonContent, IonFab, IonFabButton,
  IonGrid,
  IonHeader, IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import { Swiper, SwiperSlide, useSwiper} from "swiper/react";

import "./GamePage.css";

import Games from "../games.json";

import { useParams } from "react-router";
import React, {useState} from "react";
import {camera, trash} from "ionicons/icons";
import {usePhotoGallery, UserPhoto} from "../hooks/usePhotoGallery";

const GamePage: React.FC = () => {


  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

  const gameId = useParams<{ gameId: string }>().gameId;

  const game = Games.find((game) => game.data.steam_appid === Number(gameId));

  console.log(game?.data.name);

  if (game) {
    return (
      <IonContent fullscreen>
        <IonHeader>
          <IonCard style={{ height: "20vh" }}>
            <IonImg src={game.data.header_image}></IonImg>
          </IonCard>
        </IonHeader>
        <IonCard>
          <IonCardContent>
            <IonCardTitle>{game.data.name}</IonCardTitle>
            <IonCardSubtitle>by {game.data.developers}</IonCardSubtitle>
            <p>{game.data.short_description}</p>

            <h3>Genres</h3>
            {game.data.genres.map((genre) => (
              <IonChip key={genre.id} outline={true} disabled>
                {genre.description}
              </IonChip>
            ))}
          </IonCardContent>
        </IonCard>

        <Swiper
            slidesPerView={1}
        >
          {game.data.screenshots.map((screenshot) => (
            <SwiperSlide key={screenshot.id}>
                <IonImg src={screenshot.path_full} alt={screenshot.id.toString()} />
            </SwiperSlide>
            ))}

          {photos.map((photo, index) => {

            console.table(photo)

            if (photo.filepath.includes(String(game.data.steam_appid))) {
              return (
                  <SwiperSlide key={index}>
                    <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                  </SwiperSlide>
              );
            }




        })}


        </Swiper>



        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto(game.data.steam_appid)}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonActionSheet
            isOpen={!!photoToDelete}
            buttons={[{
              text: 'Delete',
              role: 'destructive',
              icon: trash,
              handler: () => {
                if (photoToDelete) {
                  deletePhoto(photoToDelete);
                  setPhotoToDelete(undefined);
                }
              }
            }, {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel'
            }]}
            onDidDismiss={() => setPhotoToDelete(undefined)}
        />




      </IonContent>
    );
  } else {
    <IonContent fullscreen>
      <IonHeader>
        <IonTitle>Game not found!</IonTitle>
      </IonHeader>
      <IonCard>
        <IonCardContent></IonCardContent>
      </IonCard>
    </IonContent>;
  }
};

export default GamePage;
