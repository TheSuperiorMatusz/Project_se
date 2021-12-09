<template>
  <div>
    <Button text="Hello World" :icon="['fas', 'undo']" @click.native="submitPhoto" />
    <Button text="Without Icon" />
    <InputFile label="Twój obrazek" />
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
