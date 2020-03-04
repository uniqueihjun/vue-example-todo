<template>
  <div>
      <!-- <h1>TODO it!</h1> -->
      <h1>{{ this.$store.state.headerText }}</h1>
  </div>
</template>

<script>
export default {
    data () {
        return {
            message : ''
        }
    }
}
</script>

<style scopoed>
h1 {
  color: #2F3B52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
</style>