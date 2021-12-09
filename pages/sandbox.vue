<template>
  <div>
    <Button text="Hello World" :icon="['fas', 'undo']" @click.native="submitPhoto" />
    <Button text="Without Icon" />
    <InputFile label="Twój obrazek" @set="(value) => photo = value" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      photo: null
    }
  },
  methods: {
    submitPhoto () {
      console.log('test')
    }
  }
}
</script>
