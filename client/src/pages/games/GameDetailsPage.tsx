import {
    IonActionSheet, IonButton,
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
    IonPage, IonRouterLink,
    IonRow,
    IonSegment, IonTextarea,
    IonThumbnail,
    IonTitle,
    IonToolbar,
} from "@ionic/react";

import {Swiper, SwiperSlide, useSwiper} from "swiper/react";


import gamesJson from "../../data/games.json";
import softwareJson from "../../data/software.json";

import {useParams} from "react-router";
import React, {useEffect, useState} from "react";
import {camera, trash} from "ionicons/icons";
import {usePhotoGallery, UserPhoto} from "../../hooks/usePhotoGallery";

import axios from 'axios';
import "swiper/css";


const GameDetailsPage: React.FC = () => {


    const {deletePhoto, photos, takePhoto} = usePhotoGallery();
    const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();

    const id = useParams<{ id: string }>().id;

    const gameJson = gamesJson.find((game) => String(game.steam_appid) === id);

    // get the list of software
    const softwareUsed = gameJson?.software_used;


    const gameSoftwareJson = softwareJson.filter((software) => softwareUsed?.includes(software.name));


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Make a GET request to your Express.js server
        axios.get('http://localhost:3000/steamdata/' + id) // Replace with your server URL
            .then(response => {


                setIsLoaded(true);
                setItems(response.data);
            })
            .catch(error => {


                setIsLoaded(true);
                setError(error);
            });
    }, []); // The empty dependency array ensures this effect runs only once when the component mounts

    if (error) {
        return (
            <IonPage>
            <IonContent fullscreen>
                <IonHeader>

                </IonHeader>
            </IonContent>
        </IonPage>);
    } else if (!isLoaded) {
        return (

            <IonPage>
                <IonContent fullscreen>
                    <IonHeader>

                    </IonHeader>
                </IonContent>
            </IonPage>
        )
    } else {


        // @ts-ignore
        const game = items[id];


        if (game && gameJson) {

            return (
                <IonPage>
                    <IonContent fullscreen>
                        <IonHeader>
                            <IonCard style={{height: "20vh"}}>
                                <IonImg src={game.data.header_image}></IonImg>
                            </IonCard>
                        </IonHeader>

                        <IonCard>
                            <IonCardContent>
                                <IonCardTitle>{game.data.name}</IonCardTitle>
                                <IonCardSubtitle>by {game.data.developers}</IonCardSubtitle>
                                <p>{game.data.short_description}</p>


                                <h3>Tags</h3>
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

                                </IonCardContent>
                            </IonCard>
                        )}


                        <IonCard>

                            <Swiper
                                slidesPerView={1}
                            >
                                {game.data.screenshots.map((screenshot) => (
                                    <SwiperSlide key={screenshot.id}>
                                        <IonImg src={screenshot.path_full} alt={screenshot.id.toString()}/>
                                    </SwiperSlide>
                                ))}

                                {photos.map((photo, index) => {

                                    console.table(photo)

                                    if (photo.filepath.includes(String(game.data.steam_appid))) {
                                        return (
                                            <SwiperSlide key={index}>
                                                <IonImg onClick={() => setPhotoToDelete(photo)}
                                                        src={photo.webviewPath}/>
                                            </SwiperSlide>
                                        );
                                    }


                                })}


                            </Swiper>


                        </IonCard>

                        <IonCard>
                            <IonCardContent>
                                <IonCardTitle>Software</IonCardTitle>
                                <Swiper
                                    slidesPerView={1}
                                >
                                    <IonCard>

                                        {gameSoftwareJson.map((entry) => (
                                            <SwiperSlide key={entry.id}>
                                                <IonImg src={entry.thumbnail_url} alt={entry.name}/>
                                            </SwiperSlide>
                                        ))}
                                    </IonCard>
                                </Swiper>
                            </IonCardContent>
                        </IonCard>


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
                </IonPage>
            );
        } else {
            return (
                <IonPage>
                    <IonContent fullscreen>
                        <IonHeader>
                            <IonTitle>Game not found!</IonTitle>
                        </IonHeader>
                        <IonCard>
                            <IonCardContent></IonCardContent>
                        </IonCard>
                    </IonContent></IonPage>
            );
        }


    }
    ;
};

export default GameDetailsPage;
