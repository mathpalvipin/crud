import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import  './firebase'
import Navigation from './components/Navigation.vue'
import BaseCard from './components/ui/BaseCard.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseSpinner from './components/ui/BaseSpinner.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
import SideBar from './components/ui/SideBar.vue';
import RangeSlider from './components/ui/RangeSlider.vue';
import BackgroundColor from './components/ui/BackgroundColor.vue';
import ObjectColor from './components/ui/ObjectColor.vue';
import MenuButton from './components/ui/MenuButton.vue';
import ToggleSwitch from './components/ui/ToggleSwitch.vue';
import BubbleColor from './components/ui/BubbleColor.vue';
import LoginComponent from './components/LoginComponent.vue';
import DictionaryComponent from './components/DictionaryComponent.vue';

import draggable from 'vuedraggable'
import VScrollLock from 'v-scroll-lock'
import { defineCustomElements as defineIonPhaser } from "@ion-phaser/core/loader";
defineIonPhaser(window);
 
console.log(process.env.FIREBASE_PROJECT_ID);


const app = createApp(App)
app.component('login-component', LoginComponent);
app.component('side-bar', SideBar);
app.component('navigation', Navigation);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog', BaseDialog);
app.component('range-slider', RangeSlider);
app.component('background-color', BackgroundColor);
app.component('object-color', ObjectColor);
app.component('menu-button', MenuButton);
app.component('toggle-switch', ToggleSwitch);
app.component('bubble-color', BubbleColor);
app.component('draggable', draggable);
app.component('dictionary-component', DictionaryComponent);

app.use(store)
.use(router)
//.use(firebase)
.use(VScrollLock)
.mount('#app')
 