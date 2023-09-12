import { FunctionComponent } from "react";
import { IonItem, IonLabel, IonThumbnail } from "@ionic/react";

// based on: https://fettblog.eu/typescript-react/components/

type ProgramEntryProps = {
  path: string;
  id: number;
  is_active: boolean;
  title: string;
  description: string;
  image_url: string;
};

export const ProgramEntry: FunctionComponent<ProgramEntryProps> = ({
  path,
  id,
  is_active,
  title,
  description,
  image_url,
}) => {
  if (is_active) {
    return (
      <IonItem routerLink={path + id} key={id}>
        <IonThumbnail slot="start">
          <img alt={title} src={image_url} />
        </IonThumbnail>
        <IonLabel>
          <h2>{title}</h2>
          <p>{description}</p>
        </IonLabel>
      </IonItem>
    );
  }

  return (
    <IonItem key={id}>
      <IonThumbnail slot="start">
        <img alt={title} src={image_url} />
      </IonThumbnail>
      <IonLabel>
        <h2>{title}</h2>
        <p>{description}</p>
      </IonLabel>
    </IonItem>
  );
};
