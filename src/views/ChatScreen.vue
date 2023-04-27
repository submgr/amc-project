<template>
    <ion-page>
      <ion-content :fullscreen="true">
        <div style="position: fixed; z-index: -2; margin-top: 45%; margin-left: 45%;"><p><ion-spinner name="circles"></ion-spinner></p></div> 
        <iframe src="https://chatui-ai.vercel.app/eco-chat/" style="position:fixed; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;">
          Your browser doesn't support iframes
      </iframe>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonSpinner } from '@ionic/vue';
  //import ExploreContainer from '@/components/ExploreContainer.vue';
  </script>
  
  <script>
  </script>
  