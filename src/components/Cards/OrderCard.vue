<template>
    <ion-card class="borderPersonalized" :color="colorBackground">
        <div class="imageClass">
            <img alt="Image" :src="source" width="85" height="85"/>
        </div>
        <ion-card-header class="cardHeader">
            <ion-card-title class="cardTitle">{{ title }}</ion-card-title>
            <ion-card-subtitle class="cardSubtitle"> {{ subtitle }}</ion-card-subtitle>
        </ion-card-header>
    </ion-card>
</template>

<script setup lang="ts">
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
defineProps<{ title: string, subtitle: string, source: string, colorBackground: string }>()

</script>

<style scoped>
.borderPersonalized {
    border: 1px solid black; 
    border-radius: 15px;
    width: 150px;
    height: 150px;
}

.imageClass {
    display: flex;
    justify-content: center;
    margin-top: 15px;
}

.cardHeader {
    padding: 10px 1em 0 1em;
}
.cardTitle {
    font-size: 14px;
    font-weight: bold;
}

.cardSubtitle {
    font-size: 12px;
    padding-top: 0px;
    margin-top: 2px;
}
</style>