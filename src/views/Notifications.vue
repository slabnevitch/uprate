<template lang="pug">
	main.main-screen.meetings-main.notification-main
		MeetingsHeader
			template(v-slot:header-title)
					.meetings-header__label Уведомления

			template(v-slot:header-right)
				.icon.icon-add-meeting
					img(src="@/assets/img/icons/meeting-menu-expand.svg")

		.meetings-main__content
			.meetings-main__visual
				img(src="@/assets/img/notification-page/notification-visual.svg")
			.meetings-main__title Список уведомлений в настоящий момент пуст

		BottomSidebar
</template>

<script>
import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
import BottomSidebar from '@/components/BottomSidebar.vue'

export default {

  name: 'Notifications',
  components: {
  	MeetingsHeader,
 		BottomSidebar
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	.notification-main{
		.meetings-main__visual{
			max-height: 319px;
			height: auto;
			padding-bottom: 0;

			img{
				position: static;
				transform: none;
			}
		}
	}
</style>