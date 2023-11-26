<style scoped>

</style>

<template>
  <header-layout pageTitle="Lençois" pageDefaultBackLink="/home">
    <ion-input label="Largura:" type="number" placeholder="Largura" v-model="widthPurchased"></ion-input>
    <ion-input label="Altura: " type="number" placeholder="Altura" v-model="heightPurchased"></ion-input>
    <ion-input label="Preço do m2:" type="number" placeholder="Preço" v-model="fabricPrice"></ion-input>
    <ion-button @click="addSheet">Teste</ion-button>
  </header-layout>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import SingleSheetCost from '@/entities/SingleSheetCost';
import { IonButton, IonInput } from '@ionic/vue';

let widthPurchased: any = ref('');
let heightPurchased: any = ref('');
let fabricPrice: any = ref('');

function addSheet(){
  const data: any = reactive({sheet: new SingleSheetCost(2.20, 1.50, parseFloat(widthPurchased.value), parseFloat(heightPurchased.value), parseFloat(fabricPrice.value))})
  console.log('Float: ', parseFloat(widthPurchased.value), typeof(widthPurchased.value))
  let singleSheetsStorage: any = [];
  const localStorageValue = localStorage.getItem('Sheets');
  if (localStorageValue !== null) {
    singleSheetsStorage = JSON.parse(localStorageValue);
  }
  singleSheetsStorage.push(data);
  localStorage.setItem('Sheets', JSON.stringify(singleSheetsStorage))
}
</script>