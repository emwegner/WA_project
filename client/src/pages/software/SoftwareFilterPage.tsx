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
import ExploreContainer from '../../components/ExploreContainer';

import softwareJson from "../../data/software.json";
import {useParams} from "react-router";


const SoftwareListPage: React.FC = () => {

    const filter = useParams<{ filter: string }>().filter;

    const filteredSoftware = softwareJson.filter((software) => software.tags.includes(filter));

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{filter} Software</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonList>
                    {filteredSoftware.map((software) => (
                        <IonItem
                            routerLink={`/software/id/${software.id}`}
                            key={software.id}
                        >
                            <IonThumbnail slot="start">
                                <img alt={software.name} src={software.thumbnail_url} />
                            </IonThumbnail>
                            <IonLabel>
                                <h2>{software.name}</h2>
                                <p>{software.description}</p>
                            </IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default SoftwareListPage;
