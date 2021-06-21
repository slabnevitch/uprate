<template lang="pug">
	.meeting
		SingleMeetingHeader(@selectedMeetingChange="putCloseEvent"
			:noPaddingsClass="true"
			:betweenClass="true")
		.wrapper
			.meeting-item
				.meeting-item__img._fit
					img(src="@/assets/img/meeting-page/users/user-big.jpg")
				.meeting-item__info.info-meeting-item
					.meeting-item__name Иван Константинович
					.meeting-item__tags
						.meeting-item__tag #коллега #руководитель

			.meetings-mounth Информация
		
			.meeting__info.info-meeting
				.info-meeting__row
					.info-meeting__key Дата встречи
					.info-meeting__value 01 марта, 21:00
				.info-meeting__row
					.info-meeting__key Тип встречи
					.info-meeting__value Консультация

			.meeting__rating.rating-meeting
				.rating-meeting__title Оцените встречу
				.meeting__marks
					input(type="radio" id="mark5" name="rating" value="5" @change="buttonActive = true")
					label.meeting__mark(for="mark5")

					input(type="radio" id="mark4" name="rating" value="4" @change="buttonActive = true")
					label.meeting__mark(for="mark4")

					input(type="radio" id="mark3" name="rating" value="3" @change="buttonActive = true")
					label.meeting__mark(for="mark3")

					input(type="radio" id="mark2" name="rating" value="2" @change="buttonActive = true")
					label.meeting__mark(for="mark2")

					input(type="radio" id="mark1" name="rating" value="1" @change="buttonActive = true")
					label.meeting__mark(for="mark1")

			.button.button-gray(:class="buttonActive ? 'active' : '' ") Оставить оценку
</template>

<script>
	import SingleMeetingHeader from '@/components/meetings-page/SingleMeetingHeader.vue'

	export default {
		name: 'Meeting',
		data(){
			return{
				buttonActive: false
			}
		},
		components: {
			SingleMeetingHeader
	  	},
	  	methods:{
	  		putCloseEvent(){
	  			this.$emit('selectedMeetingChange', null);
	  		}
	  	}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	.meeting{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		overflow: auto;
		z-index: 99;

		.meetings-mounth{
			margin: 0 -24px;
			font-family: $sf-t-reg;
			color: #666666;
		}

		.meeting-item{
			padding: 16px 0;
			align-items: center;

			&__img{
				width: 80px;
				height: 80px;

				&:after{
					content: '';
					position: absolute;
					width: 74px;
					height: 74px;
					left: 0;
					top: 0;
					box-sizing: content-box;
					border-radius: inherit;
					border: 2px solid rgba(239, 239, 239, 0.6);
				}
			}

			&__info{
				padding: 0;
				border-bottom: none;
			}
			&__name{
				font-size: 17px;
				line-height: 22px;
			}
			&__tags{
				font-size: 13px;
				line-height: 18px;
			}
		}
		.button-gray{
			&.active{
				background-color: $accent;
				color: $text;
			}
		}
	}
	.meeting__info{
		margin-bottom: 24px;
	}
	.info-meeting__row{
		padding: 16px 0;
		display: flex;
		font-size: 15px;
		line-height: 20px;
		border-bottom: 1px solid  #EFEFEF;
	}
	.info-meeting__key{
		flex: 0 0 50%;
	}
	.meeting__rating{
		margin-bottom: 32px;
	}
	.info-meeting__value{
		flex: 0 0 50%;
		text-align: right;
		color: #666666;
	}
	.rating-meeting__title {
		margin-bottom: 15px;
		font-family: $sf-t-reg;
		text-align: center;
	}
	.meeting__marks{
		margin: 0 -8px;
		width: 220px;
		margin: 0 auto;
		display: flex;
		flex-direction: row-reverse;

		input{
			position: absolute;
			left: -9999px;

			&:checked ~ .meeting__mark{
				background-image: url('~@/assets/img/icons/rating-star-lg-active.svg');

			}
		}
	}
	.meeting__mark{
		width: 30px;
		height: 30px;
		margin: 0 8px;
		background-image: url('~@/assets/img/icons/rating-star-lg.svg');
		background-repeat: no-repeat;
		background-size: contain;
	}
</style>