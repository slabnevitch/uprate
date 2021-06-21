<template lang="pug">
		//- MeetingsMain
		MeetingsHistory
</template>

<script>
// @ is an alias to /src
import MeetingsMain from '@/components/meetings-page/MeetingsMain.vue'
import MeetingsHistory from '@/components/meetings-page/MeetingsHistory.vue'

export default {
  name: 'Meetings',
  components: {
    MeetingsMain,
    MeetingsHistory
  }
}
</script>

<style lang="scss">

</style>
