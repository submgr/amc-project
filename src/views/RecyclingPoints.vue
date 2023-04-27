<template>
    <ion-page>
        <ion-header>
        </ion-header>
        <ion-content :fullscreen="true">
            <div style="position: fixed; z-index: -2; margin-top: 45%; margin-left: 45%;"><p><ion-spinner name="circles"></ion-spinner></p></div>
            <div style="height: 100%; border-radius: 10% / 50%; margin-bottom: -5vh;">
                <yandexMap :coords="coords" zoom=13 style="height: 100%; border-radius: 20px !important; margin-bottom: -5vh;">
                    <li v-for="marker in markersStorage" :key="marker.id">
                        <ymapMarker :coords="[marker.latitude, marker.longitude]" :marker-id="marker.id" @Click="showDetailsForPoint(marker.id)" marker-type="placemark" />
                    </li>
                </yandexMap>
            </div>
        </ion-content>
    
        <ion-modal @willDismiss="Modal_onWillDismiss" trigger="open-modal" :is-open="message_modal_isOpen == 'showPointDetails'" :initial-breakpoint="0.45" :breakpoints="[0, 0.45]" handle-behavior="cycle">
            <ion-content class="ion-padding">
                <div class="ion-margin-top">
                    <ion-row>
                        <ion-col size="8"><br />
                            <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 20px;"><b>{{flaggedTemp_CurrentPointOnView.organization}}</b><br />
                            </ion-label>
                            <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 20px;">{{flaggedTemp_CurrentPointOnView.city}} city<br /><br />
                            </ion-label>
                            <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 17px;">
                                <ion-icon :icon="callOutline" style="font-size: 14px;" /> {{flaggedTemp_CurrentPointOnView.phone}}
                            </ion-label><br />
                            <ion-label style="margin-left: 1vw; white-space: pre-wrap; font-size: 17px;">
                                <ion-icon :icon="calendarOutline" style="font-size: 14px;" /> {{flaggedTemp_CurrentPointOnView.receptionDays}}
                            </ion-label>
                            <ion-label style="margin-left: 4vw; white-space: pre-wrap; font-size: 17px;"><br /><br />
                                <ion-icon :icon="cubeOutline" style="font-size: 14px;" /> The following types of recyclables are accepted:<br /><i>{{flaggedTemp_CurrentPointOnView.specialization}}</i>
                            </ion-label>
                        </ion-col>
                        <ion-col size="4">
                            <img style="margin-top: 5vh;" src="../assets/icons8-recycling-375.png" />
                        </ion-col>
                    </ion-row>
    
                    <br />
                    <ion-button color="dark" @click="Modal_onWillDismiss" expand="block">Okay</ion-button>
                </div>
    
            </ion-content>
        </ion-modal>
    </ion-page>
    </template>
    
    <script lang="ts">
    import {
        defineComponent
    } from 'vue';
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import {
        IonPage,
        IonContent,
        IonModal, IonLabel, IonIcon, IonCol, IonRow, IonButton
    } from '@ionic/vue';
    import {yandexMap as yandexMap, ymapMarker as ymapMarker} from "vue-yandex-maps";
    import {
        callOutline,
        calendarOutline,
        cubeOutline
    } from 'ionicons/icons';
    export default defineComponent({
        name: 'Tab1Page',
        components: {
            IonContent,
            IonPage,
            yandexMap,
            ymapMarker,
            IonModal, IonLabel, IonIcon, IonCol, IonRow, IonButton
            
        },
        data() {
            return {
                state: 'awaits',
                callOutline,
                calendarOutline,
                cubeOutline,
                coords: [51.744319, 36.191987],
                markersStorage: [],
                message_modal_isOpen: "nope",
                flaggedTemp_CurrentPointOnView: [],
                layout: '<div>{{ properties.balloonContentHeader }}</div><div>{{ properties.balloonContentBody }}</div><div>{{ properties.balloonContentFooter }}</div>'
            }
        },
        mounted() {
            axios.get("https://deqstudio.com/configs/recyclingpoints.json").then((response) => {
                console.log(response.data)
                const got_data = response.data 
                this.markersStorage = got_data
            })
        },
        methods: {
            Modal_onWillDismiss() {
                this.message_modal_isOpen = "none"
            },
            showDetailsForPoint(id) {
                //alert("hi" + id)
                this.message_modal_isOpen = "showPointDetails"
                this.flaggedTemp_CurrentPointOnView = this.markersStorage.find(o => o.id === id);
                console.log(this.flaggedTemp_CurrentPointOnView)
                let tags_string = this.flaggedTemp_CurrentPointOnView.specialization
                console.log("tags_string", tags_string)
                tags_string = tags_string.split(',');
                console.log("tags_string", tags_string)
                console.log("tags_string.length", tags_string.length)
                for (let k = 0; k <= tags_string.length; k++) {
                    //alert(tags_string[k])
                    if (tags_string[k] == "metal") {
                        tags_string[k] = "metal"
                    }
                    if (tags_string[k] == "paper") {
                        tags_string[k] = "paper"
                    }
                    if (tags_string[k] == "plastic") {
                        tags_string[k] = "plastic"
                    }
                    if (tags_string[k] == "glass") {
                        tags_string[k] = "glass"
                    }
                }
                console.log("tags_string", tags_string)
                this.flaggedTemp_CurrentPointOnView.specialization = tags_string.join(', ');
            }
        }
    });
    </script>