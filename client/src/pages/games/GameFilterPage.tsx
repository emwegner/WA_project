import {
    IonContent,
    IonHeader,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import gamesJson from "../../data/games.json";

import {ProgramEntry} from "../../components/ProgramEntry";
import {useParams} from "react-router";

const GameFilterPage: React.FC = () => {

    const filter = useParams<{ filter: string }>().filter;

    const filteredGames = gamesJson.filter((game) => {
        return game.tags.some((tag) => tag.toLowerCase().includes(filter.toLowerCase()));
    });

    console.log(filteredGames);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{filter} Games</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {filteredGames.map((game) => (
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

export default GameFilterPage;
