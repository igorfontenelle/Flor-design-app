<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="titlePersonalized">List Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>List Page here</div>
      <img :src="'src/assets/vue.svg'" alt="Image"/>
      <img src="@/assets/vue.svg" alt="Image"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';

</script>

<style scoped>
.titlePersonalized{
  background-color: blueviolet;
}
</style>