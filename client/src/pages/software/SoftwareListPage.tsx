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

import softwareJson from "../../data/software.json";
import { ProgramEntry } from "../../components/ProgramEntry";

const SoftwareListPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>All Software</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {softwareJson.map((software) => (
            <ProgramEntry
              path={"/software/id/"}
              id={software.id}
              is_active={true}
              title={software.name}
              description={software.description}
              image_url={software.thumbnail_url}
            />
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SoftwareListPage;
