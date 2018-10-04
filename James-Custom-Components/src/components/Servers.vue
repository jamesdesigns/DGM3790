<template>
<div>
    <button @click="next">{{ status }}</button>
</div>
</template>
<script>
 export default {
  name: 'app',

    data () {
      return {
        status: 'Update',
      }
    },
      methods: {
        next() {
          this.status = "Server now updating...";
      }
    }
}
</script>
<style>
button {
    color: #606060;
}
</style>