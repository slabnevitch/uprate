<template lang="pug">
	.modal-container.tags-modal-container
		.modal-header
			.icon.icon-modal-close(@click="$emit('close')")
				img(src="@/assets/img/icons/modal/modal-close.svg")
			.modal-header__title Тип встречи
			.icon.icon-modal-check(@click="$emit('close')")
				img(src="@/assets/img/icons/modal/modal-check.svg")

		.modal-body
			form.tags-search(@submit.prevent="searchSubmit")
					input(type="text"
						v-model="searchValue"
						placeholder="Начать поиск по тегам")
					
					button.icon.icon-search(type="submit"
						v-if="!nothingFinded")
						img(src="@/assets/img/icons/modal/modal-search.svg", alt="")

					div.icon.icon-clear(type="submit"
						v-if="nothingFinded"
						@click="clearSearch")
						img(src="@/assets/img/icons/modal/modal-search-x.svg", alt="")

			button(type="submit"
				v-show="nothingFinded").tags-search__add Добавить

			.modal-result(:class="findedTags.length ? '' : 'list-disabled'")
				ul.modal-result__list(v-if="findedTags.length")
					li.modal-result__item(v-for="(tag, ind) in findedTags" :key="ind")
						.modal-result__check
							label.false-label
								input(type="checkbox")
								span.false-checkbox
						.modal-result__val {{tag}}

				.modal-result__default(v-show="!findedTags.length")
					span Ничего не найдено
</template>

<script>
	export default{
		name: 'TagsModal',
		props: ['selectedMeeting'],
		data(){
			return{
				searchValue: '',
				availableTags: [
					'Офис',
					'Сотрудник',
					'Коллега',
					'Руководитель'
				],
				findedTags: [],
				nothingFinded: false
				// clearAvailable: false
			}
		},
		methods: {
			callbackFromTAgsModal(){
				this.$emit('answerFromTAgsModal', null);
			},
			searchSubmit(){
				console.log(this.searchValue);
				this.findedTags = this.availableTags.filter(item => item.toLowerCase().indexOf(this.searchValue.toLowerCase()) != -1)
	          .sort((a, b) => {
	            if(a.Symbol < b.Symbol) return -1;
	            if(a.Symbol > b.Symbol) return 1;
	            return 0;
	          });
        
        if(!this.findedTags.length){
        	this.nothingFinded = true;
        }else{
					this.searchValue = '';
        	
        }
			},
			clearSearch(){
				this.searchValue = '';
				this.nothingFinded = false;
			}
		}
	}
</script>

<style lang="scss">
	@import '@/assets/scss/misc/_vars.scss';
	@import '@/assets/scss/misc/_mixins.scss';
	.tags-modal-container{
		.modal-body{
			padding: 0 16px;
			position: relative;
			display: flex;
			flex-direction: column;
			overflow: visible;
		}
	}
	.tags-search{
		margin-top: 10px;
		position: relative;
		input{
			display: block;
			width: 100%;
			padding: 8px 28px 8px 0;
			border: none;
			outline: none;
			border-bottom: 1px solid $gray;
			@include placecolor(#666666);
		}
	}
				
	.icon-search{
		width: 30px;
		height: 30px;
		display: block;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		border: none;
		background-color: transparent;
	}
	.icon-clear{
		width: 12px;
		height: 12px;
		display: block;
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);

	}
	.tags-search__add{
		width: 150px;
		height: 33px;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		font-size: 17px;
		font-family: $sf-t-reg;
		background: #FFCC00;
		border-radius: 4px;
		border: none;
	}

	.modal-result{
		flex: 1 0 0;
		padding-top: 19px;
		overflow-y: auto;

		span{
			color: #999999;
		}
		&.list-disabled{
			display: flex;
			align-items: center;
			justify-content: center;

		}
	}
	.modal-result__list{
		padding: 0;
	}
	.modal-result__item{
		list-style-type: none;
		// width: 100%;
		display: flex;
		align-items: center;
		margin-bottom: 8px;
	}
	.modal-result__check{
		flex-shrink: 0;
		margin-right: 8px;
	}
	.false-label{
			input{

				position: absolute;
				left: -9999px;

				&:checked ~ .false-checkbox{
					&:before{
						display: block;
					}
				}

			}

	}
	.false-checkbox{
		display: block;
		position: relative;
		width: 24px;
		height: 24px;
		border: 1px solid #E4E4E4;
		border-radius: 6px;

		&:before{
			content: '';
			display: none;
			width: 100%;
			height: 100%;
			background-image: url(~@/assets/img/icons/modal/modal-check.svg);
			background-repeat: no-repeat;
			background-position: center;

		}

	}
	.modal-result__val{
		font-family: $sf-t-reg;
	}

	.modal-result__default{

		span {

		}
	}

</style>
