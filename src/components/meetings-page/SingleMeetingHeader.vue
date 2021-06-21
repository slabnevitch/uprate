<template lang="pug">
	.wrapper
		.header(:class="{'no-pd': noPaddingsClass, 'between': betweenClass}")
			.icon.icon-nav-back(@click="toBack")
				img(src="@/assets/img/icons/back-arrow.svg")
			
			.meetings-header__label Результат встречи
			.icon.icon-add-meeting
				img(src="@/assets/img/icons/meeting-menu-expand.svg")
</template>

<script>

	export default {
		name: 'SingleMeetingHeader',
		props: {
			noPaddingsClass: {
				default: false
			},
			betweenClass: {
				default: false
			},
		},
		methods: {
			toBack(){
				this.$emit('selectedMeetingChange', null);
			}
		}
	}
</script>

<style lang="scss" scope>
	.single-meeting-header{
		padding: 0 24px;

		.icon-nav-back{
			left: 0;
		}

	}
</style>