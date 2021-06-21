<template lang="pug">
	.modal-container
		.modal-header
			.icon.icon-modal-close(@click="modalClose")
				img(src="@/assets/img/icons/modal/modal-close.svg")
			.modal-header__title Новая встреча
			.icon.icon-modal-check(@click="modalClose")
				img(src="@/assets/img/icons/modal/modal-check.svg")

		.modal-body
			.modal-search(v-if="!selectedMeeting")
				label
					span Имя:
					input(type="text"
						@input="searchInput"
						v-model="searchValue")
				
			ul.modal-body__list(v-if="filteredMeetings.length && !selectedMeeting")
				li.meeting-item(v-for="(meeting, ind) in filteredMeetings" 
					:key="ind"
					@click="selectedMeeting = meeting")
						.meeting-item__img._fit
							img(src="@/assets/img/meeting-page/users/6.jpg")
						.meeting-item__info.info-meeting-item
							.meeting-item__name {{meeting.name}}
							.meeting-item__tags
								.meeting-item__tag(v-for="(tag, ind) in meeting.tags"
									:key="ind") #[span #]{{tag}}

			.selected-meeting(v-if="selectedMeeting")
				li.meeting-item
					.meeting-item__img._fit
						img(src="@/assets/img/meeting-page/users/6.jpg")
					.meeting-item__info.info-meeting-item
						.meeting-item__rating
							.rating-star(v-for="(star, ind) in 5" :key="ind"
								:class="(ind + 1) <= selectedMeeting.userRating ? 'active' : ''")
						.meeting-item__name #[span Имя:] {{selectedMeeting.name}}
						.meeting-item__tags
							.meeting-item__tag(v-for="(tag, ind) in selectedMeeting.tags"
								:key="ind") #[span #]{{tag}}

				.selected-meeting__rating.rating-selected-meeting
					.rating-selected-meeting__title Оценка встречи
					.meeting-item__rating
						- for (var i=0; i < 3; i++)
							.rating-star.active
						- for (var i=0; i < 2; i++)
							.rating-star

		.modal-bottom(v-if="selectedMeeting")
			.icon.icon-modal-calendar(@click="showCalendarModal")
				img(src="@/assets/img/icons/modal/modal-calendar.svg", alt="")
			.icon.icon-modal-tags(@click="showTagsModal")
				img(src="@/assets/img/icons/modal/modal-tags.svg", alt="")

</template>

<script>
	import TagsModal from '@/components/meetings-page/modals/TagsModal.vue'
	import CalendarModal from '@/components/meetings-page/modals/CalendarModal.vue'

	export default {
		name: 'FirstModal',
		data(){
			return{
				meetings: [
					{
						name: "Самсон Карапетян",
						img: '1.jpg',
						tags: [
							"чел",
							"сотрудник"
						],
						userRating: 4,
						date: new Date("2021-05-1")
					},
					{
						name: "Саламон Карап",
						img: '2.jpg',
						tags: [
							"чел",
							"сотрудник"
						],
						userRating: 3,
						date: new Date("2021-04-26")
					},
					{
						name: "Саша Горин",
						img: '3.jpg',
						tags: [
							"чел",
							"сотрудник"
						],
						userRating: 2,
						date: new Date("2021-05-9")
					}
				],
				filteredMeetings: [],
				searchValue: '',
				selectedMeeting: null
			}
		},
		computed: {

		},
		methods: {
			searchInput(){
				if(this.searchValue !== ''){
					this.filteredMeetings = this.meetings.filter(item => item.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1)
	          .sort((a, b) => {
	            if(a.Symbol < b.Symbol) return -1;
	            if(a.Symbol > b.Symbol) return 1;
	            return 0;
	          });

	        }else{
	        	this.filteredMeetings = [];
	        }
			},
			modalClose(){
				this.$emit('close');
				this.selectedMeeting = null;
			},
			showTagsModal(){
				this.$modal.show(
				  TagsModal,
				  { selectedMeeting: this.selectedMeeting},
				  { maxWidth: 328,
				  	height: 253,
		  			adaptive: true}
				);
			},
			showCalendarModal(){
				this.$modal.show(
				  CalendarModal,
				  {currentDate: this.selectedMeeting.date},
				  { maxWidth: 328,
				  	height: 443,
		  			adaptive: true }
				);
			}
		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	@import '@/assets/scss/misc/_mixins.scss';
	@import '@/assets/scss/misc/_adjustment.scss';

	.vm--modal{
		border-radius: 8px;
	}
	.modal-container{
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.modal-header{
		padding: 0 24px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-shrink: 0;
		height: $header-height;
		border-bottom: 1px solid rgba(228, 228, 228, 0.6);
	}
	.modal-header__title{
		padding: 0 10px;
		font-family: $sf-t-semi;
		font-size: 17px;
		ine-height: 22px;
		text-align: center;
	}
	.modal-bottom{
		padding: 15px 24px;
		.icon{
			cursor: pointer;
		}
	}
	.icon-modal-calendar{
		display: inline-block;
		width: 21px;
		height: 23px;
		margin-right: 30px;
	}
	.icon-modal-tags{
		display: inline-block;
		width: 28px;
		height: 23px;
	}
	.modal-body{
		flex: 1 0 0;
		overflow-y: auto;
	}
	.modal-search{
		padding: 0 24px;
		margin-top: 16px;
		margin-bottom: 7px;
		label{
			width: 100%;
			display: flex;
			align-items: center;
			padding-bottom: 5px;
			border-bottom: 1px solid $gray;
			span{
				flex: 0 1 auto;
				margin-right: 5px;
				color: #666666;
			}
			input{
				display: block;
				flex: 1 0 0;
				outline: none;
				appearance: none;
				border: none;
				font-family: $sf-t-light;
				font-size: 15px;
				line-height: 20px;
			}

		}

	}
					
.modal-body__list{

	.meeting-item{
		list-style-type: none;
		padding: 10px 24px;
		position: relative;

		&__img{
			width: 35px;
			height: 35px;
		}
		&__info{
			padding-bottom: 0;
			border-bottom: none;
			padding-right: 0;
		}
		&__name{
			font-size: 13px;
		}
		&__tag{
			font-size: 8px;
			line-height: 12px;
		}


		&:after{
			content: '';
			position: absolute;
			display: block;
			width: calc(100% - 42px);
			height: 1px;
			bottom: 0;
			left: 24px;
			background-color: rgba(228, 228, 228, 0.3);
		}

		&:hover, &:active, &:focus{
			background-color: #F8F8F8;
		}
		
	}
}

.selected-meeting{
	padding: 0 24px;
	.meeting-item{
		display: block;
		padding: 16px 0;

		&__img{
			width: 35px;
			height: 35px;
			margin-bottom: 8px;		
		}
		&__info{
			padding: 0 0 16px 0;
		}
		&__name{
			margin-bottom: 5px;
			font-family: $sf-t-reg;

			span{
				color: #666666;
			}
		}
		&__rating{
			margin-right: 5px;
			margin-bottom: 8px;		

		}
	}
}
.selected-meeting__rating{
	.rating-star{
		width: 30px;
		height: 30px;
		background-image: url(~@/assets/img/icons/rating-star-lg.svg);

		&.active{

			background-image: url(~@/assets/img/icons/rating-star-lg-active.svg);
		}
	}
}
.rating-selected-meeting__title{
	margin-bottom: 15px;
	font-family: $sf-t-semi;
}
</style>