<template>
    <ion-page>
        <ion-header class="ion-text-center ion-no-border">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
                </ion-buttons>
                <ion-title class="ion-no-padding" style="margin-right: 10%">
                    {{ pageTitle }}
                </ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <slot/>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonButtons, IonBackButton } from "@ionic/vue";
defineProps<{ pageTitle: string, pageDefaultBackLink: string }>()
</script>

<style>

</style>