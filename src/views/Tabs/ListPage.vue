<template>
  <header-layout pageTitle="Lista de Encomendas" pageDefaultBackLink="/home">
      <ion-list>
        <ion-item v-for="memorie in memories" :key="memorie.id" :router-link="`/list/${memorie.id}`">
          {{ memorie.name }}
        </ion-item>
      </ion-list>
    </header-layout>
</template>

<script setup lang="ts">
  import { IonList, IonItem } from '@ionic/vue';
  import { ref } from 'vue';

  const memories: any = ref([
    {
        id: '1',
        name: 'Colcha de cama da mãe',
        description: 'Para segunda'
      },
      {
        id: '2',
        name: 'Colcha de cama da Sogra',
        description: 'Para terça'
      },
      {
        id: '3',
        name: 'Colcha de cama da Tia',
        description: 'Para quarta'
      },
  ])
  
  console.log('Data memory: ', memories.value)
  
</script>

<style scoped>
.titlePersonalized{
  background-color: blueviolet;
}
</style>