<template lang="pug">
  transition(name="slide" mode="")
    component(:is="screens[this.selectedScreen]"
      :curentNavIndex="selectedScreen"
      :fromEnterPage="fromEnterPage" 
      @navClick="setSelectedScreen")
</template>

<script>
// @ is an alias to /src
import MainScreen from '@/components/main-page/MainScreen.vue'
import RegistrationScreen from '@/components/main-page/RegistrationScreen.vue'
import ConfirmScreen from '@/components/main-page/ConfirmScreen.vue'
import EnterScreen from '@/components/main-page/EnterScreen.vue'

export default {
  name: 'Home',
  data(){
  	return{
  		screens: [
  			'MainScreen',
  			'RegistrationScreen',
  			'EnterScreen',
  			'ConfirmScreen'
  		],
  		selectedScreen: 0,
      fromEnterPage: false
  	}
  },
  components: {
    'MainScreen': MainScreen,
    'RegistrationScreen': RegistrationScreen,
    'EnterScreen': EnterScreen,
    'ConfirmScreen': ConfirmScreen
  },
  methods: {
  	setSelectedScreen(index){
  		this.selectedScreen = index;
  	},
    setIsEnter(value){
      this.fromEnterPage = value;
    }
  },
  created(){
    this.$eventBus.$on('changeComponentFrom', this.setIsEnter)
  }
}
</script>

<style lang="scss">

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-out;
  width: 100%;
  // height: 100%;
  position: fixed;
}


.slide-enter-to {
  position: fixed;
  right: 0;
}


.slide-enter {
  position: fixed;
  right: -100%;
}


.slide-leave-to {
  position: fixed;
  left: -100%;
}


.slide-leave {
  position: fixed;
  left: 0;
}
</style>
