import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

export default function HomePage() {
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div
          style={{
            color: 'white',
          }}
        >
          HomePage
        </div>
      </IonContent>
    </IonPage>
  );
}
