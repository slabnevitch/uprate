<template lang="pug">
	main.meetings-main.meetings-history-main
		MeetingsHeader(@modalComand="showMyModal"
			:noPaddingsClass="true")

		.meetings-history-title История втреч
		.meetings-list
			.meetings-block
				.meetings-mounth Март
				ul.meetings-block__list.list-meetings-block
					- for (var n=0; n <3 ; n++)
						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/"+(n+1)+".jpg")
							.meeting-item__info.info-meeting-item
								.meeting-item__name Иван Константинович
								.meeting-item__tags
									.meeting-item__tag #коллега #руководитель
								
								.meeting-item__bottom
									.meeting-item__rating
										- for (var i=0; i < 3; i++)
											.rating-star.active
										- for (var i=0; i < 2; i++)
											.rating-star
									
									.meeting-item__date Вчера, 10:30

				.meetings-mounth Февраль
				ul.meetings-block__list.list-meetings-block
					- for (var n=3; n <6 ; n++)
						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/"+(n+1)+".jpg")
							.meeting-item__info.info-meeting-item
								.meeting-item__name Иван Константинович
								.meeting-item__tags
									.meeting-item__tag #коллега #руководитель
								
								.meeting-item__bottom
									.meeting-item__rating
										- for (var i=0; i < 3; i++)
											.rating-star.active
										- for (var i=0; i < 2; i++)
											.rating-star
									
									.meeting-item__date Вчера, 10:30

				.meetings-mounth 2020
				ul.meetings-block__list.list-meetings-block
					li.meeting-item(@click="selectedMeeting = true")
						.meeting-item__img._fit
							img(src="@/assets/img/meeting-page/users/6.jpg")
						.meeting-item__info.info-meeting-item
							.meeting-item__name Иван Константинович
							.meeting-item__tags
								.meeting-item__tag #коллега #руководитель
							
							.meeting-item__bottom
								.meeting-item__rating
									- for (var i=0; i < 3; i++)
										.rating-star.active
									- for (var i=0; i < 2; i++)
										.rating-star
								
								.meeting-item__date Вчера, 10:30

		BottomSidebar
		
		transition(name="translate")
			Meeting(v-if="selectedMeeting"
				@selectedMeetingChange="selectedMeetingToggle")
</template>

<script>
	import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
	import Meeting from '@/components/meetings-page/Meeting.vue'
	import BottomSidebar from '@/components/BottomSidebar.vue'
	import FirstModal from '@/components/meetings-page/modals/FirstModal.vue'

	export default {
		name: 'MeetingsHistory',
		data(){
			return{
				selectedMeeting: null
			}
		},
		components: {
	    	MeetingsHeader,
	    	BottomSidebar,
	    	Meeting,
	    	FirstModal
	  },
	  methods:{
	  	selectedMeetingToggle(){
	  		this.selectedMeeting = null;
	  	},
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
	.meetings-history-main{
		justify-content: flex-start;
		background-color: transparent;
		padding: 0 24px;
		height: 100%;

		.meetings-header{
			padding: 0;
		}
		.icon-add-meeting{
			right: 0;
		}
	}
	.translate-enter-active, .translate-leave-active {
    	transition: all .5s;
	}
	.translate-enter, .translate-leave-to {
	  transform: translateX(100%);
	}
	@media screen and (max-width: 320px) {
		.meetings-history-main{
			.menu-sidebar{
				margin: 0 -34px;
			}

		}
	}
</style>