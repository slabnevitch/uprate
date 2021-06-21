<template lang="pug">
	.header(:class="{'no-pd': noPaddingsClass, 'between': betweenClass}")
		slot(name="header-left")
		slot(name="header-title")
		slot(name="header-right")
			.icon.icon-add-meeting(@click="$emit('modalComand', null)")
				img(src="@/assets/img/icons/plus.svg")
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
	props: {
		noPaddingsClass: {
			default: false
		},
		betweenClass: {
			default: false
		},
	},
  name: 'MeetingsHeader'

}
</script>

<style lang="scss">
	
</style>
