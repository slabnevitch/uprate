<template lang="pug">
	main.main-screen.contacts-main
		MeetingsHeader(@modalComand="showMyModal"
			:betweenClass="true")

				template(v-slot:header-left)
					.icon.icon-header-search
						img(src="@/assets/img/icons/header-search.svg")
				
				template(v-slot:header-title)
					.meetings-header__label(v-if="selected == 1") Группы
					.meetings-header__label(v-else) Контакты

				template(v-slot:header-right)
					.icon.icon-header-chev
						img(src="@/assets/img/icons/header-chev.svg")
		
		.contacts-header
			.wrapper
				.contacts-tabs(:class="{right: selected == 1}")
					.contacts-tab(@click="selected = 0") Люди
					.contacts-tab(@click="selected = 1") Группы

				.contacts-sort
					span Сортировать
					.icon.icon-down-chevron
						img(src="@/assets/img/icons/down-chevron.svg")

		.contacts-body
			transition(name="slide")
				.contacts-content.wrapper(v-if="selected == 1")
					.contacts-content__visual
						img(src="@/assets/img/contacts-page/groups-visual.svg")
					.meetings-main__title Пока нет ни одной группы
					.meetings-main__caption Коснитесь, чтобы добавить
			
			transition(name="slide")
				.contacts-content.wrapper(v-if="selected < 1")
					.contacts-content__visual
						img(src="@/assets/img/meeting-page/meeting-visual.svg")
					.meetings-main__title Пока нет ни одного контакта
					.meetings-main__caption Коснитесь, чтобы добавить контакт


		BottomSidebar

</template>

<script>

import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
import BottomSidebar from '@/components/BottomSidebar.vue'

export default {

  name: 'Contacts',
  components: {
  	MeetingsHeader,
  	BottomSidebar
  },
  data () {
    return {
    	tabs: [
    		'Люди',
    		'Группы'
    	],
    	selected: 0 
    }
  },
  methods: {
    toggleTabs () {
      this.selected = this.selected === 0 ? 1 : 0;
    }
  }
}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	.contacts-main{

	}
	.contacts-body{
		flex: 1 1 0;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		background-color: $l-gray;

	}
	.contacts-content__visual{
		max-width: 333px;
		max-height: 224px;
		margin: 0 auto 24px auto;

		img{
			max-width: 100%;
			max-height: 100%;
		}
	}
	.contacts-tabs{
		position: relative;
		display: flex;
		align-items: center;
		background-color: #F3F3F4;
		height: 37px;
		margin-top: 6px;
		margin-bottom: 9px;
		border-radius: 28px;

		&:before{
			content: '';
			display: block;
			position: absolute;
			left: 3px;
			top: 3px;
			transition: all .2s;
			width: 50%;
			height: 31px;
			background: $accent;
			border-radius: 19px;
		}

		&.right{
			&:before{
				left: calc(50% + 3px);
			}
		}

	}
	.contacts-tab{
		position: relative;
		z-index: 2;
		width: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
		line-height: 18px;
		font-family: $sf-t-reg;
	}
	.contacts-sort{
		margin-bottom: 9px;

		span{
			margin-right: 5px;
			font-size: 13px;
			line-height: 18px;
			color: #666666;
		}
	}
	.icon-down-chevron{
		width: 12px;
		height: 6px;
	}

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