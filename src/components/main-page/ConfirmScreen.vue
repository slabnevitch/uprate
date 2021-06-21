<template lang="pug">
   main.main
    .wrapper
      MainPageHeader(:curentNavIndex="curentNavIndex" 
        @headerNavClick="toBackNav"
        :fromEnterPage="fromEnterPage")
     
      h1.main-page-title Подтвердите свой номер телефона
      .caption Проверьте свои SMS-сообщения. Мы отправили вам PIN-код на ваш номер

      form.uprate-form.confirm-sms-form(action="#")
        label.uprate-form__label(v-for="ind in 6" :key="ind")
          input.uprate-form__input(type="text")
      
      .caption Не получили SMS?

    .button Продолжить

</template>

<script>
// @ is an alias to /src
import MainPageHeader from '@/components/main-page/MainPageHeader.vue'

export default {
	props: ['curentNavIndex', 'fromEnterPage'],
  name: 'ConfirmScreen',
  components: {
    MainPageHeader
  },
  methods: {
  	toBackNav(){
      if(!this.fromEnterPage){
  		  this.$emit('navClick', this.curentNavIndex - 2);
        return
      }
      this.$emit('navClick', this.curentNavIndex - 1);
  	},
  	toForwNav(){
  		this.$emit('navClick', this.curentNavIndex + 1);
  	}
    
  },
  created(){
    // console.log()
  },
  mounted(){
    // const smsInputs = document.querySelectorAll('.uprate-form__input');
    // for(let i = 0; i < smsInputs.length; i++){
      
    // }
  }
}
</script>

<style lang="scss">
	
</style>
