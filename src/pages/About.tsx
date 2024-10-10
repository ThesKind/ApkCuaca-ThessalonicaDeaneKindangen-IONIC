import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                    Aplikasi pengecekan cuaca berbasis Ionic
                </p>
                <p>By : Thessalonica Deane Kindangen (210211060068)</p>
            </IonContent>
        </IonPage>
    )
}

export default About;