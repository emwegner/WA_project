import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import developerJson from "../../data/developers.json";

import { ProgramEntry } from "../../components/ProgramEntry";

const DeveloperListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Developers</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {developerJson.map((developer) => (
            <ProgramEntry
              path="/developers/id/"
              id={developer.id}
              is_active={true}
              title={developer.name}
              description={`alias ${developer.professional_name}`}
              image_url={developer.profile_image}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default DeveloperListPage;
