<template lang="pug">
	main.main.calendar-main
		MeetingsHeader

			template(v-slot:header-right)
				.header-icons-box
					.icon.icon-customization
						svg(width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg')
							path(d='M4 19.1428V12.1428M4 8.14282V1.14282M12 19.1428V10.1428M12 6.14282V1.14282M20 19.1428V14.1428M20 10.1428V1.14282M1 12.1428H7M9 6.14282H15M17 14.1428H23'  stroke-linecap='round' stroke-linejoin='round')

					.icon.icon-add-meeting
						img(src="@/assets/img/icons/plus.svg")
		
		.calendar-content
			
			MyCalendar
			//- .calendar-schedule(:class="{'expanded': swipedDown}"
			//- 	:style="{height: heightString}")
			//- 	v-calendar(
			//- 		title-position="center"
			//- 		nav-visibility="hidden"
			//- 		is-expanded=true
			//- 		transition="slide-h"
			//- 		:locale="{ masks: { weekdays: 'WW', title: 'MMMM' }}"
			//- 		mode="date" 
			//- 		:available-dates='{ start: new Date(), end: null }'
			//- 		:attributes='attrs'
			//- 	)
			//- 	.calendar-schedule__handler(
			//- 		ref="interactElement"
			//- 		v-touch:swipe.bottom="swipeHandlerDown"
			//- 		v-touch:swipe.top="swipeHandlerUp")

			.calendar-list
				.calendar-list__block
					.calendar-list__header.header-calendar-list.today
						.header-calendar-list__day Сегодня
						.header-calendar-list__bottom
							.header-calendar-list__weekday Среда
							.header-calendar-list__month Март
					
					.calendar-list__body
						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/1.jpg")
							.meeting-item__info.info-meeting-item
								.info-meeting-item__left
									.meeting-item__name Аван Карапетян
									.meeting-item__tags Встреча, по поводу верстки

								.meeting-item__time
									.meeting-item__watch 13.00
									.meeting-item__limit 2 часа

						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/4.jpg")
							.meeting-item__info.info-meeting-item
								.info-meeting-item__left
									.meeting-item__name Александр Пташкин
									.meeting-item__tags Хочет что-то мне впарить

								.meeting-item__time
									.meeting-item__watch 14.00
									.meeting-item__limit 1 час
				
				.calendar-list__block
					.calendar-list__header.header-calendar-list
						.header-calendar-list__day Завтра
						.header-calendar-list__bottom
							.header-calendar-list__weekday Четверг
							.header-calendar-list__month Март
					
					.calendar-list__body
						.calendar-list__empty Ничего не запланировано

				.calendar-list__block
					.calendar-list__header.header-calendar-list
						.header-calendar-list__bottom
							.header-calendar-list__weekday Пятница
							.header-calendar-list__month Март
					
					.calendar-list__body
						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/1.jpg")
							.meeting-item__info.info-meeting-item
								.info-meeting-item__left
									.meeting-item__name Аван Карапетян
									.meeting-item__tags Встреча, по поводу верстки

								.meeting-item__time
									.meeting-item__watch 13.00
									.meeting-item__limit 2 часа

						li.meeting-item(@click="selectedMeeting = true")
							.meeting-item__img._fit
								img(src="@/assets/img/meeting-page/users/4.jpg")
							.meeting-item__info.info-meeting-item
								.info-meeting-item__left
									.meeting-item__name Александр Пташкин
									.meeting-item__tags Хочет что-то мне впарить

								.meeting-item__time
									.meeting-item__watch 14.00
									.meeting-item__limit 1 час

		BottomSidebar

		transition(name="translate")
			Meeting(v-if="selectedMeeting"
				@selectedMeetingChange="selectedMeetingToggle")
</template>

<script>
	import Meeting from '@/components/meetings-page/Meeting.vue'
	import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
	import BottomSidebar from '@/components/BottomSidebar.vue'
	import MyCalendar from '@/components/calendar-page/MyCalendarMonthsScroll.vue'

	import interact from 'interactjs'

export default {

  name: 'Calendar',
  components: {
  	MeetingsHeader,
	BottomSidebar,
	Meeting,
	MyCalendar
  },
  data () {
    return {
    	interactPositionY: 140,
    	calendarHeight: null,
    	startPointY: 0,
    	endPointY: 0,
    	swipedDown: false,

    	selectedMeeting: null,

    	attrs: [
        {
          // key: 'today',
          highlight: true,
          dates: new Date()
        },
      ],
    }
  },
  computed: {
    heightString () {
      return `${this.interactPositionY}px`;
    }
  },
  methods: {
    swipeHandlerDown() {
      console.log('swipe down!')
      // this.swipedDown = true;
    },
    swipeHandlerUp() {
      console.log('swipe up!')
      // this.swipedDown = false;
    },
    selectedMeetingToggle(){
    	this.selectedMeeting = null;
    }
  },
  mounted() {
  // 	const element = this.$refs.interactElement;
  // 	const calendarDefaultHeight = document.querySelector('.vc-container').offsetHeight;
  // 	console.log(calendarDefaultHeight)
  // 	this.calendarHeight = calendarDefaultHeight;
  	
  // 	interact(element).draggable({
  // 		startAxis: 'y',
		// lockAxis: 'y',
		// onstart: (event) => {
  // 			console.log('start' + event.pageY)
  // 			this.startPointY = event.pageY

	 //    },
  // 		onmove: event => {
  // 			this.interactPositionY += event.dy;
  // 			console.log(event.dy)

  // 		},
  // 		onend: (event) => {
  // 			console.log('end' + event.pageY)
  // 			this.endPointY = event.pageY

  // 			if((this.endPointY - this.startPointY) < this.calendarHeight - 100){
  // 				this.interactPositionY = 140
  // 			}else{
  // 				this.interactPositionY = this.calendarHeight
  // 			}
	 //    }
  // 	});
  }

}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	@import '@/assets/scss/misc/_mixins.scss';
	@import '@/assets/scss/misc/_adjustment.scss';
	.calendar-main{
		touch-action: none;
  			user-select: none;
		.icon-edit{

			svg	{
				fill: $link;

			}
		}
		.icon-customization{
			path{
				stroke: $link;
			}
		}
	}
	.calendar-schedule{
		padding: 0 28px;
		position: relative;
		padding-bottom: 15px;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
		background-color: #fff;
		overflow: hidden;
		transition: all .6s ;
		min-height: 140px;

		.vc-container {
			// height: 130px;
			// overflow: hidden;
			transition: all .5s;
		}
		.vc-arrows-container{
			align-items: center;
			// height: 70px;
		}
		.vc-header{
			padding: 0;
		}
		.vc-title{
			font-family: $sf-d-semi;
			font-size: 34px !important;
			line-height: 41px;
			&:after{
				display: none;
			}
		}
		.vc-day{
			margin-bottom: 10px;
		}
		&__handler{
			width: 50px;
			height: 4px;
			position: absolute;
			z-index: 2;
			bottom: 10px;
			left: 0;
			right: 0;
			margin: auto;
			background: #E0E0E0;
			border-radius: 4px;
			touch-action: none;
  			user-select: none;
		}

		&.expanded{
			padding-bottom: 5px;
			.vc-container {
				height: 100%;
			}
		}
	}
	.calendar-content{
		display: flex;
		flex-direction: column;
		flex: 1 0 0;
		background-color: #E5EFFA;
	}
	.calendar-list{
		flex: 1 0 0;
		overflow-y: auto;
		background-color: #fff;
	}
	.calendar-list__block{

	}
	.calendar-list__header{
		padding: 0 24px;
		padding-bottom: 7px;
		height: 56px;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		background-color: $l-gray;

		&.today{
			background-color: #E5EFFA;
		}
	}
	.header-calendar-list__day{
		margin-bottom: 3px;
		font-size: 13px;
		line-height: 18px;
		color: $link;
	}
	.header-calendar-list__bottom{
		display: flex;
		align-items: center;
	}
	.header-calendar-list__weekday{
		margin-right: 10px;
		font-family: $sf-t-semi;
		font-size: 17px;
		line-height: 17px;
	}
	.header-calendar-list__month{
		position: relative;
		line-height: 15px;
		color: #999999;
		&:before{
			content: '';
			display: inline-block;
			vertical-align: middle;
			margin-right: 10px;
			width: 3px;
			height: 3px;
			border-radius: 100%;
			background-color: #999999;
		}

	}
	.calendar-list__body{
		padding: 0 24px;
		.meeting-item{
			// align-items: center;
			padding-left: 0;
			// padding-bottom: 6px;
			.meeting-item__img{
				width: 35px;
				height: 35px;
			}
			&__info{
				padding-right: 0;
				display: flex;
				align-items: center;
				padding-bottom: 10px;
			}
			&__name{
				font-family: $sf-t-reg;
			}
			.meeting-item__tags{
				margin-bottom: 0;
			}
		}
	}
	.meeting-item__time{
		margin-left: auto;
		text-align: right;
		font-size: 11px;
		line-height: 13px;
	}
	.meeting-item__watch{
		margin-bottom: 5px;
		color: $link;
	}
	.meeting-item__limit{
		color: #999999;
	}
	.calendar-list__empty{
		height: 55px;
		margin: 5px 0;
		padding-left: 15px;
		border-left: 1px solid #E0E0E0;
		display: flex;
		align-items: center;
		font-size: 11px;
		line-height: 13px;
		color: #999999;
		font-family: $sf-d-reg;
	}

	.translate-enter-active, .translate-leave-active {
    	transition: all .5s;
	}
	.translate-enter, .translate-leave-to {
	  transform: translateX(100%);
	}
</style>