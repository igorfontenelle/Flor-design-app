<template>
  <ion-app class="main-app">
      <ion-router-outlet></ion-router-outlet>
  </ion-app>
</template>

<script setup lang="ts">
  import { IonApp, IonRouterOutlet } from '@ionic/vue';

</script>

<style scoped>
.main-app {
  background-color: red !important ;
}
</style>
