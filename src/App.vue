<template>
  <home-screen-vue v-if="statusScreen === 'default'" @onStart="onHandleBeforeStart($event)"/>
  <game-screen-vue v-if="statusScreen === 'playGame'" 
    :matrixRandom="settings.matrixRandom"
    :sizeOfScreen="settings.sizeOfWidth"  
  />
</template>

<script>
import HomeScreenVue from './components/HomeScreen.vue';
import GameScreenVue from './components/GameScreen.vue';
import { createRandomArrays, getNumberSize } from '@/utils/index'
export default {
  name: 'App',
  components: {
    HomeScreenVue,
    GameScreenVue,
  },
  data() {
    return {
      statusScreen: "default",
      settings: {
        numberOfBlock: 0,
        sizeOfWidth: 0,
        matrixRandom: [],
      },
    }
  },
  methods : {
    onHandleBeforeStart(configs) {
      this.settings.numberOfBlock = configs.numberOfBlock;
      this.settings.sizeOfWidth = getNumberSize(configs.numberOfBlock);
      this.settings.matrixRandom = createRandomArrays(this.settings.numberOfBlock);
      this.statusScreen = "playGame";
    },
  }
}
</script>

<style>
</style>
