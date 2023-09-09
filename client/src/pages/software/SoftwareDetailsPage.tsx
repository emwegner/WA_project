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
    IonPage,
    IonRouterLink,
    IonThumbnail,
    IonTitle
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
              <IonHeader>
           
              </IonHeader>
  
              <IonCard>
                <IonCardContent>
                  <IonCardTitle>{software.name}</IonCardTitle>
                  <p>{software.description}</p>
  
                  <h3>Tags</h3>
                  {software.tags.map((tag) => (
                    <IonRouterLink key={tag} href={`/games/filter/${tag}`}>
                      <IonChip key={tag} outline={true}>
                        {tag}
                      </IonChip>
                    </IonRouterLink>
                  ))}

                <IonImg class="softwareimg"src={software.thumbnail_url} alt={software.name} />
                <IonCard>
                <IonImg class="softwareimages" src={software.screenshot_urls[0]} alt={software.name} />
                </IonCard>
                <IonCard>
                <IonImg class="softwareimages" src={software.screenshot_urls[1]} alt={software.name} />
                </IonCard>
                <IonCard>
                <IonImg class="softwareimages" src={software.screenshot_urls[2]} alt={software.name} />
                </IonCard>
    
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