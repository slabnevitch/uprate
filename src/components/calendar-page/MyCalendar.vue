<template lang="pug">.mycalendar
    .mycalendar__header
      .mycalendar__handler.prev(@click="monthBack")
      span {{monthList[currentMonth]}}
      .mycalendar__handler.next(@click="monthForw")

    //- div {{currentMonth}}
    //- div {{getCurMonth}}
    .mycalendar__content
      .calendar__wrapper(
        ref="wrapper")
          .mycalendar__cell(v-for="(cell, ind) in getCalendar" :key="`cell${ind}`"
            :class="{'active': cell.isActiveDay}")
              .mycalendar__dayname {{cell.dayName}}
              .mycalendar__value {{cell.dayOfWeekInd}}
      //- .div(@click="currentMonth + 1") next
//- div {{getDaysInMonthCount}}
//- div {{currentMonth}}
//- div getPrevMonthDays {{getPrevMonthDays.length}}
//- .mycalendar__title {{getCurMonth}}
//- .mycalendar__content
//-  swiper(
//-    ref="mySwiper"
//-    :options="swiperOptions"
//-    :initialSlide="getPrevMonthDays.length + swiperOptions.slidesPerView"
//-    @slide-prev-transition-start="backward"
//-    @slide-next-transition-start="forward"
//-    @slide-change-transition-start="transitionStart")
//-      swiper-slide(v-for="(cell, ind) in calendarArr" :key="`cell${ind}`")
//-        .mycalendar__cell
//-           .mycalendar__dayname {{cell.dayName}}
//-           .mycalendar__value {{cell.dayOfWeekInd}}
</template>

<script>
	// import { VueAgile } from 'vue-agile'
	import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
	import createCalendar from '@/functions/createCalendar'

export default {

  name: 'MyCalendar',
  components: {
  	// VueAgile
  	Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data () {
    return {
    	currentDate: new Date(),
    	currentYear: new Date().getFullYear(),
    	currentMonth: new Date().getMonth(),
    	calendarArr: [],
    	nextMonthArr: [],
    	prevMonthArr: [],
      initialMonth: new Date().getMonth(),
      scrollLeft: 0,

    	monthList: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

    	activeDates: [new Date(2021, 4, 4), new Date(2021, 4, 24),  new Date(2021, 4, 14)]

    	// swiperOptions: {
    	// 		loop: true,
    	// 		slidesPerView: 7
    	// 		// slidesPerGroup: 7
     //    }
     }
  },
  computed: {
    getCalendar () {
      return createCalendar(this.currentYear, this.currentMonth, this.activeDates);
    },
    getCurMonth(){
    	return this.monthList[this.currentMonth];
    },
    getPrevMonthDays(){
      return createCalendar(this.currentYear, this.currentMonth - 1);
    },
    getNextMonthDays(){
      return createCalendar(this.currentYear, this.currentMonth + 1);
    }
  },
  methods: {
    forward(swiper){
  		console.log('Forw');
       console.log(swiper);
      // console.log(swiper.slides);
      console.log('prev ' + swiper.previousIndex);
      console.log('real ' + swiper.realIndex);
      console.log('snap ' + swiper.snapIndex);
      console.log('prev' + swiper.previousIndex)
      console.log('active' + swiper.activeIndex)

      if(swiper.realIndex > this.getDaysInMonthCount - this.swiperOptions.slidesPerView - 1){
        console.log('condition true')

        this.monthForw();
        // console.log(this.$refs.mySwiper)
        // this.$refs.mySwiper.updateSwiper();
        // this.$refs.mySwiper.updateSwiper();
      }
      // if(swiper.realIndex >= createCalendar(this.currentYear, this.currentMonth - 1).length){

      //   console.log('второе условие');
      //   this.calendarArr.splice(0, createCalendar(this.currentYear, this.currentMonth - 1).length);
      //   console.log(this.calendarArr);
      //   this.$refs.mySwiper.updateSwiper();

      // }

    },
    backward(swiper){
      console.log('Back');
       console.log(swiper);
      console.log('prev ' + swiper.previousIndex);
      console.log('real ' + swiper.realIndex);
      console.log('snap ' + swiper.snapIndex);
      console.log('prev' + swiper.previousIndex)
      console.log('active' + swiper.activeIndex)

      if(swiper.realIndex < this.getDaysInMonthCount + this.swiperOptions.slidesPerView - 1){
        console.log('condition true')

        this.monthBack();
        // this.$refs.mySwiper.$swiper.updateSlides();
      }

      // if(swiper.realIndex <= createCalendar(this.currentYear, this.currentMonth - 1).length){

      //   console.log('второе условие');
      //   this.calendarArr.splice(this.getDaysInMonthCount - createCalendar(this.currentYear, this.currentMonth + 1).length, createCalendar(this.currentYear, this.currentMonth + 1).length);
        
      //   console.log(this.calendarArr)
        
      //   this.$refs.mySwiper.updateSwiper();

      // }

      // if(swiper.previousIndex === 7 && swiper.realIndex == this.getDaysInMonthCount - 1){
       
      //  this.$refs.mySwiper.updateSwiper();
      // }

    },
  	monthForw(){
      console.log('this.monthForw');

  		this.currentMonth += 1;
  		
  		if(this.currentMonth > 11) {
  			this.currentMonth = 0;
  			this.currentYear += 1;
  		}

  	},
  	monthBack(){
  		this.currentMonth -= 1;
  		
  		if(this.currentMonth < 0) {
  			this.currentMonth = 11;
  			this.currentYear -= 1;
  		}


  	},
  	nativeMonthForw(){

    },
    nativeMonthBack(){
      
    },
    widthWrapper(){
      return this.$refs.wrapper.offsetWidth;
    },
    widthCell(){
      return this.widthWrapper() /  100 * 14.3;
    },
  	calendarWrapperScroll(evt){

  		console.log(this.widthWrapper());
      console.log(this.widthCell());
      console.log(evt.target);
  		console.log(evt.target.offsetWidth + evt.target.scrollLeft);
  		console.log(evt.target.scrollWidth);
  		
  		if((evt.target.offsetWidth + evt.target.scrollLeft) >= evt.target.scrollWidth){
  			this.nativeMonthForw();
  			// evt.target.scrollTo(1, 0);
  		}
  		if(evt.target.scrollLeft < 1){
  			this.nativeMonthBack();
  			// evt.target.scrollTo(0, 0);
  		}
  	},
  	showCurrentSlide (event) {
	    console.log(event)
	    if(event.currentSlide ===  this.getDaysInMonthCount - this.swiperOptions.slidesPerView){
	    	this.monthForw();
	    	// this.$refs.carousel.reload();
	    }
	    if(event.currentSlide ===  0 && event.nextSlide === this.getDaysInMonthCount - 1){
	    	this.monthBack();

	    	console.log(this.getDaysInMonthCount - this.swiperOptions.slidesPerView)
	    	// setTimeout(() => {

	    	// 	this.$refs.carousel.goTo(createCalendar(this.currentYear, this.currentMonth - 1).length - this.agileOptions.slidesToShow);
	    	// }, 500);
	
	    }
		},

  },
  created(){
  	this.calendarArr = createCalendar(this.currentYear, this.currentMonth, this.activeDates);
  },
  mounted(){
    // this.$refs.wrapper.scrollTo(this.widthCell() * this.getPrevMonthDays.length, 0);
    // console.log('scrollLEft ' + this.$refs.wrapper.scrollLeft)
  }
}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	.mycalendar{
    padding: 0 24px;
    
    background-color: #fff;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
		
    &__content{
			display: flex;
			align-items: center;

		}
	}
	.calendar__wrapper{
    padding-bottom: 37px;
		display: flex;
		flex: 1 0 0;
		overflow-x: auto;
	}
	.mycalendar__cell{
		// width: 40px;
		width: 14.3%;
		flex-shrink: 0;
		text-align: center;
		user-select: none;

    &.active{
      .mycalendar__value{
        color: #fff;
        background-color:#0084F4;
      }
    }
	}
	.mycalendar__dayname{
  	margin-bottom: 12px;
		font-size: 11px;
		font-family: $sf-t-reg, sans-serif;
		color: rgb(160, 174, 192);
		text-transform: uppercase;
		font-weight: 400;
	}
	.mycalendar__value{
    width: 25px;
    height: 25px;
    margin: 0 auto;
    line-height: 25px;
    text-align: center;
    border-radius: 100%;
		font-size: 15px;
	}
  .mycalendar__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 26px;
    font-size: 34px;
    line-height: 41px;
    font-family: $sf-t-semi;
  }
  .mycalendar__handler{
    width: 30px;
    background-repeat: no-repeat;
    background-position: center;

    &.prev{
      background-image: url(~@/assets/img/icons/modal/calendar-prev.svg);
    }
    &.next{
      background-image: url(~@/assets/img/icons/modal/calendar-next.svg);
    }
  }

</style>