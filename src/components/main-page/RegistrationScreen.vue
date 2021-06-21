<template lang="pug">
  main.main
    .wrapper
      MainPageHeader(
        :curentNavIndex="curentNavIndex"
        @headerNavClick="toBackNav")
     
      h1.main-page-title Регистрация
      .caption Уже есть аккаунт? #[a(href="" @click.prevent="toEnterScreen") Войти] 

      form.uprate-form(action="#")
        label.uprate-form__label.label-phone-codes
          input.uprate-form__input(type="text" placeholder="RU +7")
          .icon.icon-chevron-down
            img(src="@/assets/img/icons/chevron-down.svg")

        label.uprate-form__label
          input.uprate-form__input(type="text" placeholder="Номер телефона")

        label.uprate-form__label
          input.uprate-form__input(type="text" placeholder="Имя")

      Socials

    .button(@click="toForwNav") Продолжить

</template>

<script>
// @ is an alias to /src
import MainPageHeader from '@/components/main-page/MainPageHeader.vue'
import Socials from '@/components/Socials.vue'

export default {
	props: ['curentNavIndex'],
  name: 'RegistrationScreen',
  components: {
    MainPageHeader,
    Socials
  },
  methods: {
  	toBackNav(){
  		this.$emit('navClick', this.curentNavIndex - 1);
  	},
  	toForwNav(){
      // this.$eventBus.$emit('changeComponentFrom', false);
  		this.$emit('navClick', this.curentNavIndex + 2);
  	},
    toEnterScreen(){
      this.$emit('navClick', this.curentNavIndex + 1);
    }
    
  }
}
</script>

<style lang="scss">
	
</style>
