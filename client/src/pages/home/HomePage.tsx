import {
    IonCard,
    IonCardSubtitle,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRow,
    IonThumbnail,
    IonTitle,
    IonToolbar,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonButton
} from '@ionic/react';


import "../../theme/Page.css"


const HomePage: React.FC = () => {



    return (
        <IonPage>


            <IonContent fullscreen>

                <IonCard style={{ height: "20vh" }}>

                    <IonImg class="home_headerimg"src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/610b4c55-d68b-49c1-b8c0-55834b7aa7c0/dg8fpt7-ae02481a-3b59-4dc8-ab12-7d7630a0c788.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYxMGI0YzU1LWQ2OGItNDljMS1iOGMwLTU1ODM0YjdhYTdjMFwvZGc4ZnB0Ny1hZTAyNDgxYS0zYjU5LTRkYzgtYWIxMi03ZDc2MzBhMGM3ODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dI93sRJz2Jrp338wKo4VI4w2U_gfPL93LNLnXcQFaxw"></IonImg>
                </IonCard>

                <IonToolbar>
                    <IonTitle>Indie Game Base</IonTitle>
                </IonToolbar>

                <IonCard >
                    <h2>HomePage</h2>
                    <IonTitle>Welcome to Indie Game Base, where you can look up all sorts of Information related to Indie Games and their Development!</IonTitle>

                </IonCard>

                <IonGrid class="homeGrid">
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                                <IonCardHeader>
                                    <IonCardTitle>Games</IonCardTitle>
                                    <IonCardSubtitle>Find out more about different Indie Games!</IonCardSubtitle>
                                </IonCardHeader>
                                <IonButton href="/games">Click here!</IonButton>
                            </IonCard>
                        </IonCol>

                        <IonCol>
                            <IonCard>
                                <img alt="Silhouette of mountains" src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
                                <IonCardHeader>
                                    <IonCardTitle>Software</IonCardTitle>
                                    <IonCardSubtitle>Find out more about different Software!</IonCardSubtitle>
    
                                </IonCardHeader>
                                <IonButton href="/software">Click here!</IonButton>
                            </IonCard>
                        </IonCol>

                    </IonRow>
                </IonGrid>


            </IonContent>
        </IonPage>
    );
};

export default HomePage;
