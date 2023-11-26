<template>
  <header-layout pageTitle="Lista de Encomendas" pageDefaultBackLink="/home">
      <ion-list>
        <ion-item router-link="/list/1">
          Lençol 1
        </ion-item>
        <ion-item router-link="/list/2">
          Lençol 2
        </ion-item>
        <ion-item router-link="/list/3">
          Lençol 3
        </ion-item>
      </ion-list>
    </header-layout>
</template>

<script setup lang="ts">
  import { IonList, IonItem } from '@ionic/vue';
</script>

<style scoped>
.titlePersonalized{
  background-color: blueviolet;
}
</style>