<template lang="pug">
	.main-page-header
		.icon.icon-nav-back(@click="headerNavClick")
			slot
				img(src="@/assets/img/icons/back-arrow.svg")

</template>

<script>
	export default {
		props: ['fromEnterPage', 'curentNavIndex'],
		methods: {
			headerNavClick(){
				// console.log('headerNavClick')
				// if(fromEnterPage){

				// 	this.$emit('headerNavClick', this.curentNavIndex - 2);
				// 	return
				// }
				this.$emit('headerNavClick', this.curentNavIndex - 1);
			}
		},
		created(){
			console.log(this.fromEnterPage)
			// console.log(this.curentNavIndex)
		},
		destroyed(){
			// this.fromEnterPage = false;
		}
	}
</script>

<style lang="scss">
	.main-page-header{
		position: absolute;
		padding-left: 21px;
		top: 0;
		left: 0;
		width: 100%;
		height: 44px;
		display: flex;
		align-items: center;
	}
	.icon-nav-back{
		width: 18px;
		height: 18px;
		cursor: pointer;
	}
	.nav-back-chevron{
		transform: rotate(90deg);
	}
</style>