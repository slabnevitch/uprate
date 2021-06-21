<template lang="pug">
	main.main.profile-main
		MeetingsHeader(:betweenClass="true")

			template(v-slot:header-left)
				.icon.icon-header-search
					svg(width='20' height='10' viewBox='0 0 20 10' fill='none' xmlns='http://www.w3.org/2000/svg')
						path(d='M5.35551 0.4765C5.12615 0.468919 4.90591 0.562929 4.7525 0.732753L0.666626 5.14213L4.7525 9.55151C4.93932 9.75924 5.22488 9.85174 5.4998 9.79109C5.77321 9.73044 5.99345 9.52725 6.07547 9.25887C6.15749 8.99048 6.08914 8.69936 5.89472 8.49617L3.50547 5.91847H18.5442C18.8252 5.92302 19.0849 5.77594 19.2262 5.53334C19.369 5.29225 19.369 4.99202 19.2262 4.75093C19.0849 4.50832 18.8252 4.36124 18.5442 4.36579H3.50547L5.89472 1.78809C6.10585 1.5652 6.1666 1.24071 6.04965 0.957165C5.93421 0.675134 5.66233 0.485597 5.35551 0.4765Z')


			template(v-slot:header-right)
				.header-icons-box
					.icon.icon-customization
						img(src="@/assets/img/icons/customization.svg")
					.icon.icon-edit
						img(src="@/assets/img/icons/edit.svg")

		.profile-picture
			.profile-picture__img._fit
				img(src="@/assets/img/profile-page/profile-big.jpg")
			.profile-picture__bottom
				.profile-picture__cocials
					Socials

				.profile-picture__photo
					.icon.icon-photo
						img(src="@/assets/img/icons/photo.svg")

		.profile-info
			.profile-info__header
				.profile-info__name Дарья Пупкина
				.profile-info__phone +7 123 456 78-90
				.profile-info__rating
					.meeting-item__rating
						- for (var i=0; i < 5; i++)
							.rating-star.active

					.meeting-item__rating-val 5.0
		
				.profile-info__features
					.profile-info__feature
						.profile-info__key Like index
						.profile-info__val 140

					.profile-info__feature
						.profile-info__key Средняя оценка
						.profile-info__val 140

					.profile-info__feature
						.profile-info__key Оценок
						.profile-info__val 12

			.profile-info__body
				- var params = ['Комфортность', 'Компетентность', 'Пунктуальность', 'Результативность'];
				each param in params
					.profile-info__param.param-profile-info
							.param-profile-info__name= param
							.param-profile-info__rating
								.meeting-item__rating
									- for (var i=0; i < 3; i++)
										.rating-star.active
									- for (var i=0; i < 2; i++)
										.rating-star
								.meeting-item__rating-val 3.3

		BottomSidebar
</template>

<script>
import MeetingsHeader from '@/components/meetings-page/MeetingsHeader.vue'
import BottomSidebar from '@/components/BottomSidebar.vue'
import Socials from '@/components/Socials.vue'

export default {

  name: 'Profile',

  components: {
  	MeetingsHeader,
		BottomSidebar,
		Socials
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	@import '@/assets/scss/misc/_mixins.scss';
	.profile-main{
		overflow: hidden;
		.header{
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			background-color: transparent;
			z-index: 3;
		}
		.icon-header-search{
			svg{
				fill: #fff;
			}
		}
	}
	
	.profile-picture{
		position: relative;
		flex: 1 0 45%;
		flex-shrink: 0;
		display: flex;
		justify-content: flex-end;
		flex-direction: column;
		padding: 0 24px 98px 24px;
	}
	.profile-picture__img{
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	.profile-picture__bottom{
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.profile-picture__cocials{
		margin-right: 15px;
		.socials{
			margin: 0;
		}
		.socials__header{
			display: none;
		}
		.socials__item{
			margin-left: 4.5px;
			margin-right: 4.5px;
		}
		.socials__link{
			width: 24px;
			height: 24px;
		}

	}
	.profile-picture__photo{
		width: 32px;
		height: 32px;
		position: relative;
		background-color: #A7ADAB;
		border-radius: 100%;
		img{
			@include absolute-center;
		}
	}
	.profile-info{
		position: relative;
		z-index: 3;
		border-top-left-radius: 40px;
		border-top-right-radius: 40px;
		flex: 1 0 55%;
		display: flex;
		flex-direction: column;
		margin-top: -83px;
		padding: 0 24px;
		background-color: #fff;
	}
	.profile-info__header{
		padding-top: 30px;
		flex-shrink: 0;
		text-align: center;
	}
	.profile-info__name{
		font-size: 22px;
		line-height: 28px;
		margin-bottom: 5px;
		font-family: $sf-d-semi;
		@include dots-family();
	}
	.profile-info__phone{
		margin-bottom: 5px;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: 0.03em;
		color: #999999;
		font-family: $sf-d-reg;
	}
	.profile-info__rating{
		display: flex;
		justify-content: center;
		align-items: center;
		
		.meeting-item__rating{
			margin-right: 15px;

			.rating-star{
				width: 18px;
				height: 18px;
				margin: 0 4px;
			}
		}
		.meeting-item__rating-val{
			font-size: 22px;
			line-height: 28px;
			font-family: $sf-d-reg;
		}
	}
	.profile-info__features{
		margin-top: 28px;
		padding-bottom: 21px;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #EBEBEB;
	}
	.profile-info__feature{
		text-align: center;
	}
	.profile-info__key{
		margin-bottom: 5px;
		font-size: 13px;
		line-height: 16px;
		letter-spacing: 0.03em;
		color: #999999;
		font-family: $sf-d-reg;
	}
	.profile-info__val{
		font-size: 17px;
		line-height: 22px;
		font-family: $sf-t-semi;
	}
	.profile-info__body{
		padding-top:  22px;
		flex: 1 0 0;
		overflow-y: auto;
	}
	.profile-info__param{
		padding-left: 32px;
		margin-bottom: 10px;
	}
	.param-profile-info__name{
		margin-bottom: 3px;
		font-size: 12px;
		line-height: 20px;
	}
	.param-profile-info__rating{
		display: flex;
		align-items: center;
		.meeting-item__rating{
			margin-right: 14px;
		}
		.meeting-item__rating-val{
			font-size: 17px;
			line-height: 22px;
		}
	}
</style>
