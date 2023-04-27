<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Sorting Guide</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Sorting Guide</ion-title>
                </ion-toolbar>
            </ion-header>
    
            <img style="margin-top: 4vh; margin-left: 1.5vw; margin-right: 1.5vw; width: 97vw; " src="../assets/howtosort_intro.png" />
    
            <ion-grid style="margin-top: 0vh; margin-left: 1.5vw; margin-right: 1.5vw; width: 97vw;">
                <ion-row>
                    <ion-col @click="showInstructions('plastic')"><img src="../assets/howtosort_plastic.png" style="border-radius: 15px;" /></ion-col>
                    <ion-col @click="showInstructions('metal')"><img src="../assets/howtosort_metal.png" style="border-radius: 15px;" /></ion-col>
                </ion-row>
                <ion-row>
                    <ion-col @click="showInstructions('paper')"><img src="../assets/howtosort_paper.png" style="border-radius: 15px;" /></ion-col>
                    <ion-col @click="showInstructions('glass')"><img src="../assets/howtosort_glass.png" style="border-radius: 15px;" /></ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    
        <ion-modal @willDismiss="Modal_onWillDismiss" trigger="open-modal" :is-open="message_modal_isOpen == 'showSortingInstructions'" :initial-breakpoint="0.95" :breakpoints="[0, 0.95]" handle-behavior="cycle">
            <ion-content class="ion-padding">
                <div class="ion-margin-top">
                    <!---<img src="../assets/graphics/wide_banner_forest.png" v-if="currentCrudeForModal == 'paper'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                    <img src="../assets/graphics/wide_banner_glass.png" v-if="currentCrudeForModal == 'glass'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                    <img src="../assets/graphics/wide_banner_metal.png" v-if="currentCrudeForModal == 'metal'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>
                    <img src="../assets/graphics/wide_banner_forest.png" v-if="currentCrudeForModal == 'plastic'" style="margin-left: 1.5vw; margin-top: 3vh; border-radius: 30px; width: 50vw; height: 7vh;"/>--->
                    <ion-grid style="margin-top: 1vh;">
                        <ion-row>
                            <ion-col size="12">
                                <ion-label style="white-space: pre-wrap;"><b>Sorting 
                                        <span v-if="currentCrudeForModal == 'paper'">Paper</span>
                                        <span v-if="currentCrudeForModal == 'glass'">Glass</span>
                                        <span v-if="currentCrudeForModal == 'metal'">Metal</span>
                                        <span v-if="currentCrudeForModal == 'plastic'">Plastic</span>
                                    </b></ion-label><br /><br />
                                    
                                <ion-label style="white-space: pre-wrap; margin-top:">
                                    <span v-if="currentCrudeForModal == 'paper'">Recycling paper, cardboard, and other waste paper is a great way to contribute to a greener world. By doing so, we can reduce the need for cutting down forests, which would otherwise be necessary for producing these raw materials.<br/><br/>When recycling paper, there is no need for extensive preparation. However, it is essential to ensure that the paper does not contain any staples or other non-paper items. This simple step will help to ensure that the recycling process is as effective as possible.
                                    </span>
                                    <span v-if="currentCrudeForModal == 'glass'">Glass can be recycled many times without compromising quality. There are no special instructions for glass: just recycle empty glass objects.</span>
                                    <span v-if="currentCrudeForModal == 'metal'">Metal thrown away instead of recycling has negative effects on the surrounding environment, e.g. poisoning ground (ground) water and even polluting the atmosphere due to gradual oxidation.<br/><br/>Before sorting the metal, make sure it is clean, if possible, it can be cleaned.</span>
                                    <span v-if="currentCrudeForModal == 'plastic'">Recycling plastic is very important and requires a serious approach. Plastics make up a huge amount of solid waste and take centuries to decompose in a landfill or in the ocean. Therefore, all recyclable plastics must be recycled in order to reduce waste in landfills, conserve energy and save the environment.<br/><br/>You must remove caps, caps, dispenser pumps and similar loose parts (such as films on cheese package) and place them separately in a collection container.</span>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    </ion-grid>
                    <iframe v-if="currentCrudeForModal == 'paper'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/_ZwMne7evis" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe v-if="currentCrudeForModal == 'glass'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/zGNPgZLl1ms" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe v-if="currentCrudeForModal == 'metal'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/2YyS6K67mdw" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe v-if="currentCrudeForModal == 'plastic'" style="width: 100%; border-radius: 20px; margin-top: 4vh;" src="https://www.youtube.com/embed/RPGt_X5VLZ4" title="Что делать с использованной бумагой? Как сдать макулатуру?" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    
                    <br /><br />
                    <div style="display: grid; place-items: center;">
                        <!---<img style="height: 20vh;" src="../assets/graphics/app-download-qrcode.svg"/>--->
                    </div>
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
    import {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonModal
    } from '@ionic/vue';
    export default defineComponent({
        name: 'Tab1Page',
        data() {
            return {
                message_modal_isOpen: "none",
                currentCrudeForModal: "none"
            }
        },
        components: {
            IonHeader,
            IonToolbar,
            IonTitle,
            IonContent,
            IonPage,
            IonModal
        },
        methods: {
            Modal_onWillDismiss() {
                this.message_modal_isOpen = "nope"
            },
            showInstructions(cat) {
                console.log(cat)
                this.message_modal_isOpen = "showSortingInstructions"
                this.currentCrudeForModal = cat
            }
        }
    });
    </script> 