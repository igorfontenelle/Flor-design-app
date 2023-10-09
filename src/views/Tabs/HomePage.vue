<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Flor Design</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col>
            <OrderCard title="Lençois" subtitle="Luva, Casal, Solteiro" source="src/assets/figures/padrao-de-tecido.png" colorBackground="blue-pastel"></OrderCard>
          </ion-col>
          <ion-col>
            <OrderCard title="Colchas Casal" subtitle="Box, Queen, King" source="src/assets/figures/cama-de-casal.png" colorBackground="brown-pastel"></OrderCard>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <OrderCard title="Colhas Solteiro" subtitle="Padrão, Solteirão" source="src/assets/figures/cama-de-solteiro.png" colorBackground="yellow-pastel"></OrderCard>
          </ion-col>
          <ion-col>
            <OrderCard title="Cortinas" subtitle="Macho, Americana" source="src/assets/figures/cortinas.png" colorBackground="pink-pastel"></OrderCard>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonGrid, IonRow, IonCol } from '@ionic/vue';
  import OrderCard from '@/components/Cards/OrderCard.vue';
</script>

<style scoped>
</style>