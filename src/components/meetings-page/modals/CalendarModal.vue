<template lang="pug">
	.modal-container.calendar-modal-container
		.modal-header
			.icon.icon-modal-close(@click="$emit('close')")
				img(src="@/assets/img/icons/modal/modal-close.svg")
			.modal-header__title Дата
			.icon.icon-modal-check(@click="$emit('close')")
				img(src="@/assets/img/icons/modal/modal-check.svg")

		.modal-body
			v-date-picker(
				title-position="left"
				is-expanded
				:locale="{ masks: { weekdays: 'WW' } }"
				mode="date" 
				v-model="currentDate"
				:available-dates='{ start: new Date(), end: null }'
			)
		.modal-footer
			.calendar-modal-menu
				.calendar-modal-menu__item(@click="currentDate = ''")
					.calendar-modal-menu__icon
						.icon.icon-clear(
							@click="clearCurrentDate")
								img(src="@/assets/img/icons/modal/modal-search-x.svg", alt="")
			
					.calendar-modal-menu__text Удалить дату

				.calendar-modal-menu__item
					.calendar-modal-menu__icon
						.icon.icon-bell
								img(src="@/assets/img/icons/modal/bell.svg", alt="")
			
					.calendar-modal-menu__text Напомнить

			//- button(@click="currentDate = ''") Reset date

</template>

<script>


	export default{
		props: ['currentDate'],
		name: 'CalendarModal',
		// props: ['selectedMeeting'],
		data(){
			return{
			}

		},
		components: {
			// Calendar
		},
		methods: {
			clearCurrentDate(){

			}

		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	@import '@/assets/scss/misc/_mixins.scss';

	

	.calendar-modal-menu__item{
		display: flex;
		height: 48px;
		align-items: center;
		padding: 0 20px;
		border-top: 1px solid rgba(228, 228, 228, 0.6);

		&:active, &:focus{
			background-color: $l-gray;
		}
		
	}
	.calendar-modal-menu__icon{
		flex-shrink: 0;
		width: 20px;
		height: 23px;
		margin-right: 12px;
		position: relative;

		.icon{
			@include absolute-center;
		}
		.icon-clear{
			right: auto;
			margin-top: -2px;
		}
	}
	.icon-bell{
		width: 20px;
		height: 23px;
	}
	.calendar-modal-menu__text{

	}
</style>
