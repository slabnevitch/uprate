<template lang="pug">
	main.main.main-screen
		.wrapper
				.logo
					img(src="@/assets/img/logo.svg")

				.main-visual
					img(src="@/assets/img/main-page-visual.svg")

				.button(@click="toRegistration")  Создать новый аккаунт

				Socials

				.button.empty(@click="toEnter") У меня уже есть аккаунт

		p.main-screen-description Продолжая, вы принимаете условия использования политики конфидициальности UpRate

</template>

<script>
// @ is an alias to /src
import Socials from '@/components/Socials.vue'

export default {
	props: ['curentNavIndex'],
  name: 'MainScreen',
  data(){
  	return{
      fromEnterPage: false
  	}
  },
  components: {
    Socials
  },
  methods: {
  	toRegistration(){
  		this.$emit('navClick', this.curentNavIndex + 1);
  	},
	toEnter(){
		this.$emit('navClick', this.curentNavIndex + 2);
	}
  },
  created(){
    console.log('MainScreen.vue fromEnterPage value= ' + this.fromEnterPage)
  }
}
</script>

<style lang="scss">
	
</style>
