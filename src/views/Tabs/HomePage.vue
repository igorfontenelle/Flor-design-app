<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="titlePersonalized2">Flor Design</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div class="toolbar-in-line">Home Page here</div>
      <OrderCard title="Lençois" subtitle="Luva, Casal, Solteiro" source="src/assets/figures/padrao-de-tecido.png" colorBackground="blue-pastel"></OrderCard>
      <OrderCard title="Colchas Casal" subtitle="Box, Queen, King" source="src/assets/figures/cama-de-casal.png" colorBackground="brown-pastel"></OrderCard>
      <OrderCard title="Colhas Solteiro" subtitle="Padrão, Solteirão" source="src/assets/figures/cama-de-solteiro.png" colorBackground="yellow-pastel"></OrderCard>
      <OrderCard title="Cortinas" subtitle="Macho, Americana" source="src/assets/figures/cortinas.png" colorBackground="pink-pastel"></OrderCard>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage } from '@ionic/vue';
  import OrderCard from '@/components/Cards/OrderCard.vue';
</script>

<style scoped>
.titlePersonalized2{
  background-color: pink;
}
</style>