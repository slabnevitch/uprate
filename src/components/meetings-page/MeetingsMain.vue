<template lang="pug">
	main.meetings-main
		MeetingsHeader(@modalComand="showMyModal")
			template(v-slot:header-title)
				.meetings-header__label История встреч

		.meetings-main__content
			.meetings-main__visual
				img(src="@/assets/img/meeting-page/meeting-visual-2.svg")
			.meetings-main__title Тут пока ничего нет.
			.meetings-main__caption Коснитесь, чтобы добавить встречу

		BottomSidebar
</template>

<script>
	import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
	import BottomSidebar from '@/components/BottomSidebar.vue'
	import FirstModal from '@/components/meetings-page/modals/FirstModal.vue'

	export default {
		name: 'MeetingsMain',
		components: {
	    MeetingsHeader,
	    BottomSidebar
	  },
	  methods: {
		  showMyModal(){
		  	console.log('showMyModal');

		  	this.$modal.show(
		  		FirstModal,
		  		{ text: 'This text is passed as a property' },
		  		{
		  			maxWidth: 375,
		  			minHeight: 417,
		  			adaptive: true
		  		}
		  		);
		  }
	  	
	  }
	}
</script>

<style lang="scss">
	
</style>