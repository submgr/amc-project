<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="recyclingpoints" href="/tabs/recyclingpoints">
          <ion-icon aria-hidden="true" :icon="mapOutline" />
          <ion-label>Recycling Points</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="sortingguide" href="/tabs/sortingguide">
          <ion-icon aria-hidden="true" :icon="prismOutline" />
          <ion-label>Sorting Guide</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="ecofootprintquiz" href="/tabs/ecofootprintquiz">
          <ion-icon aria-hidden="true" :icon="leafOutline" />
          <ion-label>Your Footprint</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="creativeideas" href="/tabs/creativeideas">
          <ion-icon aria-hidden="true" :icon="sparklesOutline" />
          <ion-label>Upcycling</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/tabs/chat">
          <ion-icon aria-hidden="true" :icon="chatboxOutline" />
          <ion-label>Chat with Aurora</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, mapOutline, chatboxOutline, leafOutline, prismOutline, sparklesOutline } from 'ionicons/icons';
</script>
