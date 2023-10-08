<style scoped>
.home-page {
  background-color: blue;
}
</style>

<template>
  <ion-page style="background-color: blue;">
    <ion-header>
      <ion-toolbar>
        <ion-title>Home Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div>Home Page here</div>
      <img src="@/assets/logo/Flor-design-logo-small.svg"/>
      <img src="@/assets/figures/padrao-de-tecido.png" width="85" height="85"/>
      <img src="@/assets/figures/cama-de-casal.png" width="85" height="85"/>
      <img src="@/assets/figures/cama-de-solteiro.png" width="85" height="85"/>
      <HelloWorld msg="Teste"/>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import HelloWorld from '@/components/HelloWorld.vue';
</script>