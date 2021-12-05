<template>
  <div class="test">
    test
    <Button text="Hello World" @eclick="submitPhoto" />
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
