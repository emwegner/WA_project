import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonThumbnail,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import gamesJson from "../../data/games.json";

import {ProgramEntry} from "../../components/ProgramEntry";

const GameListPage: React.FC = () => {



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All Games</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {gamesJson.map((game) => (
                        <ProgramEntry
                            path="/games/id/"
                            id={game.steam_appid}
                            is_active={game.software_used !== undefined}
                            title={game.name}
                            description={game.developer}
                            image_url={game.header_image}
                        />
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default GameListPage;
