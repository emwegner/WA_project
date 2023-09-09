import {
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonThumbnail
} from "@ionic/react";
import softwareJson from "../../data/software.json";
import gamesJson from "../../data/games.json";

import {useParams} from "react-router";

const SoftwareDetailsPage: React.FC = () => {

    const id = useParams<{ id: string }>().id;
    const software = softwareJson.find((entry) => String(entry.id) === id);

    // @ts-ignore
    const usedInGames = gamesJson.filter((game) => game.software_used?.includes(software?.name));

    console.log(usedInGames);

    if (software) {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonHeader> {software.name} </IonHeader>
                    <IonCard>
                        <IonCardContent>

                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </IonPage>
        )
    } else {
        return (
            <IonPage>
                <IonContent fullscreen>
                    <IonHeader> Software not found </IonHeader>
                </IonContent>
            </IonPage>
        );
    }
}

export default SoftwareDetailsPage;