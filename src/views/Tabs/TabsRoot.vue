<template>
    <ion-page>
        <ion-tabs>
          <ion-router-outlet></ion-router-outlet>
          <ion-tab-bar slot="bottom" part="tabcustom" class="tab-bar-box" color="pink-pastel">
              <ion-tab-button tab="home" href="/home">
              <ion-icon :icon="homeOutline" />
              <ion-label>Home</ion-label>
              </ion-tab-button>
              
              <ion-tab-button tab="list" href="/list">
              <ion-icon :icon="listOutline"></ion-icon>
              <ion-label>Lista</ion-label>
              </ion-tab-button>

              <ion-tab-button tab="settings" href="/settings">
              <ion-icon :icon="settingsOutline"></ion-icon>
              <ion-label>Configurações</ion-label>
              </ion-tab-button>
          </ion-tab-bar>
          </ion-tabs>
    </ion-page>
</template>
  
  <script setup lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
    import { listOutline } from 'ionicons/icons';
    import { homeOutline } from 'ionicons/icons';
    import { settingsOutline } from 'ionicons/icons';
  </script>

<style scoped>

.tab-bar-box {
  border: 1px solid black;
  border-radius: 15px;
  width: 320px;
  height: 45px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
</style>

<style>
/*ion-tab-bar::part(tabcustom) {
  border: 1px solid blue;
}*/
</style>