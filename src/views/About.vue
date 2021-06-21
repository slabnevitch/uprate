<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="show">open</button>
    <button @click="hide">close</button>
     <modal name="my-first-modal">
        This is my first modal
        <button @click="showSecond">Show second</button>
    </modal>
    <modal name="my-second-modal">
        This is my second modal
    </modal>
  </div>
</template>

<script>
	
export default {
    name: 'About',
    methods: {
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        },
        showSecond(){
            this.$modal.show('my-second-modal');
        	
        }
    },
    mount () {
        this.show()
    }
}

</script>
