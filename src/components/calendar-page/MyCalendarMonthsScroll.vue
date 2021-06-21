<template lang="pug">.mycalendar
    div currentMonth {{currentMonth}}
    div calendarArr {{calendarArr.length}}   
    div startPosition {{startPosition}}
    //- div scrollDirection {{scrollDirection}}
    .mycalendar__header
      .mycalendar__handler.prev(@click="monthBack")
      span {{monthList[currentMonth]}}
      .mycalendar__handler.next(@click="monthForw")

    //- div {{currentMonth}}
    //- div {{getCurMonth}}
    .mycalendar__content
      .calendar__wrapper(
        @scroll="calendarWrapperScroll"
        ref="wrapper")
          .mycalendar__cell(v-for="(cell, ind) in calendarArr" :key="`cell${ind}`"
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
  data () {
    return {
    	currentDate: new Date(),
    	currentYear: new Date().getFullYear(),
    	currentMonth: new Date().getMonth(),
      prevMonth: new Date().getMonth() - 1,
      nextMonth: new Date().getMonth() + 1,

      startPosition: 0,
      scrollDirection: '',

      scrollPause: false,

    	calendarArr: [],
    	nextMonthArr: [],
    	prevMonthArr: [],
      initialMonth: new Date().getMonth(),
      scrollLeft: 0,

    	monthList: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],

    	activeDates: [new Date(2021, 4, 4), new Date(2021, 4, 24),  new Date(2021, 4, 14)]
    }
  },
  computed: {
    getCalendar () {
      return createCalendar(this.currentYear, this.currentMonth, this.activeDates);
    },
    getCurMonth(){
    	return this.monthList[this.currentMonth];
    },
    getCurMonthDays(){
      return createCalendar(this.currentYear, this.currentMonth).length || 0;
    },
    getPrevMonthDays(){
      return createCalendar(this.currentYear, this.prevMonth).length || 0;
    },
    getNextMonthDays(){
      return createCalendar(this.currentYear, this.nextMonth).length || 0;
    }
  },
  methods: {
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
    dayWidth(){
      return this.widthWrapper() /  100 * 14.3;
    },
    curMonthWidthPx(){
      return this.getCurMonthDays * (this.dayWidth() || 0);
    },
    prevMonthWidthPx(){
      return this.getPrevMonthDays * (this.dayWidth() || 0);
    },
    nextMonthWidthPx(){
      return this.getNextMonthDays * (this.dayWidth() || 0);
    },
  	calendarWrapperScroll(evt){
      const scrollLeft =  evt.target.scrollLeft;

  		// console.log(this.widthWrapper());
    //   console.log(this.dayWidth());
      // console.log(evt.target);
  		// console.log(evt.target.offsetWidth + evt.target.scrollLeft);
  		// console.log(evt.target.scrollWidth);
      console.log('scrollLeft' + scrollLeft);
      console.log('position' + (this.startPosition + this.curMonthWidthPx()/2));

      this.scrollDirection = scrollLeft > this.startPosition ? 'to Forward' : 'to Backward';

      if(this.scrollDirection === 'to Forward'){
        console.log('to forw')
        if(scrollLeft > (this.startPosition + this.curMonthWidthPx()/2)){
          console.log('1/2 of curMonth completed!');

          if(this.calendarArr.length < (this.getCurMonthDays + this.getPrevMonthDays +this.getNextMonthDays)){
            this.calendarArr = [...this.calendarArr, ...createCalendar(this.currentYear, this.nextMonth, this.activeeDates)];
          }
        }

        if(scrollLeft > (this.startPosition + this.curMonthWidthPx()) && !this.scrollPause){
            this.calendarArr.splice(0, this.getPrevMonthDays);
            this.startPosition = this.curMonthWidthPx();
  			     // evt.target.scrollTo(this.getCurMonthDays, 0);
            this.scrollPause = true;
            this.monthForw();
          setTimeout(() => {
            this.scrollPause = false;
          }, 5000)

        }
      }

  		
  		// if((evt.target.offsetWidth + evt.target.scrollLeft) >= evt.target.scrollWidth){
  		// 	this.nativeMonthForw();
  		// 	// evt.target.scrollTo(1, 0);
  		// }
  		// if(evt.target.scrollLeft < 1){
  		// 	this.nativeMonthBack();
  		// }
  	}

  },
  created(){
  	this.calendarArr = [...createCalendar(this.currentYear, this.prevMonth, this.activeDates), ...createCalendar(this.currentYear, this.currentMonth, this.activeDates)];
  },
  mounted(){
    console.log(this.$refs.wrapper)
    this.$refs.wrapper.scrollTo(this.dayWidth() * this.getPrevMonthDays, 0);
    this.startPosition = this.dayWidth() * this.getPrevMonthDays;
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