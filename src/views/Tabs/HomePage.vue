<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="titleHome">Flor Design</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <OrderCard 
              title="Lençois" 
              subtitle="Luva, Casal, Solteiro" 
              source="src/assets/figures/padrao-de-tecido.png" 
              colorBackground="blue-pastel"
              href="/home/addSheet">
              </OrderCard>
          </ion-col>
          <ion-col>
            <OrderCard 
              title="Colchas Casal" 
              subtitle="Box, Queen, King" 
              source="src/assets/figures/cama-de-casal.png" 
              colorBackground="brown-pastel">
            </OrderCard>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <OrderCard 
              title="Colhas Solteiro" 
              subtitle="Padrão, Solteirão" 
              source="src/assets/figures/cama-de-solteiro.png" 
              colorBackground="yellow-pastel">
          </OrderCard>
          </ion-col>
          <ion-col>
            <OrderCard 
              title="Cortinas" 
              subtitle="Macho, Americana" 
              source="src/assets/figures/cortinas.png" 
              colorBackground="pink-pastel">
            </OrderCard>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
  import OrderCard from '@/components/cards/OrderCard.vue';
  import SingleSheetCost from '@/entities/SingleSheetCost';
  import FabricCostInterface from '@/entities/FabricCostInterface';
  import SheetFactoryInterface from '@/entities/SheetFactoryInterface';
  import SheetFactory from '@/entities/SheetFactory';
  import SingleSheetCostAdapter from '@/entities/adapter/SingleSheetCostAdapter';
  import SimpleSheetBed from '@/entities/template-methods/SimpleSheetBed';

  const colchaSolteiroMae: FabricCostInterface = new SingleSheetCost(2.20, 1.50, 2.20, 1.55, 30);
  const colchaSolteiroAdapter: any = new SingleSheetCostAdapter(colchaSolteiroMae);
  const simpleSheet: any = new SimpleSheetBed(2.20, 1.50, 2.20, 1.55, 30);
  let lencolFactory: SheetFactoryInterface = new SheetFactory() as SheetFactoryInterface;

  console.log('Single sheet', colchaSolteiroMae);
  console.log('Single sheet Adapter', colchaSolteiroAdapter);
  console.log('Simple Sheet: ', simpleSheet);
  console.log('Lencol 1: ', lencolFactory.create('SheetBed', 2.20, 1.50, 2.20, 1.55, 30))
</script>

<style scoped>
.titleHome {
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>