<template>
  <div>
    <Button text="Hello World" :icon="['fas', 'undo']" @click.native="submitPhoto" />
    <Button text="Without Icon" />
  </div>
</template>

<script>
export default {
  methods: {
    submitPhoto () {
      console.log('test')
    }
  }
}
</script>
