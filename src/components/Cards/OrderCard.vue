<template>
    <ion-button class="borderPersonalized" :color="colorBackground">
        <ion-grid class="grid-size">
            <ion-row class="rowAlign">
                <img alt="Image" :src="source" width="85" height="85"/>
            </ion-row>
            <ion-row class="wd-135 mg-top-10">
                <ion-label class="btnTitle">{{ title }}</ion-label>
            </ion-row>
            <ion-row class="wd-135 mg-top-5">
                <ion-label class="btnSubtitle"> {{ subtitle }}</ion-label> 
            </ion-row>
        </ion-grid>
        <div >
        </div>
    </ion-button>
</template>

<script setup lang="ts">
import { IonButton, IonGrid, IonLabel } from '@ionic/vue';
defineProps<{ title: string, subtitle: string, source: string, colorBackground: string }>()

</script>

<style scoped>
.borderPersonalized {
    border: 1px solid black; 
    border-radius: 4px;
    width: 152px;
    height: 152px;
    text-transform: capitalize;
}

.btnTitle {
    font-size: 14px;
    font-weight: bold;
    color: #161616;
}

.btnSubtitle {
    font-size: 12px;
    color: #454545;
}

.rowAlign {
    display: flex; 
    justify-content: center; 
}

.grid-size {
    width: 140px;
    height: 130px;
}

.wd-135 {
    width: 135px;
}
.mg-top-10 {
    margin-top: 10px;
}

.mg-top-5 {
    margin-top: 5px;
}
</style>