<template>
  <main>
    <h1>Cat or Not</h1>
    <Loader v-if="loading" />
    <InputFile label="YOUR PICTURE" :edit="image && image.file" @set="(value) => handlePhotoChange(value)" />
    <Button v-if="result === null" text="CONTINUE" :disabled="image === null" :icon="['fas', 'arrow-right']" @click.native="() => getResult()" />
    <template v-else>
      <!-- @MACIEJ tutaj wstaw nowy komponent, do ktorego np. przeslesz rozny tekst i typ (success, fail) zaleznie od zmiennej result. Ma wyswietlac czy jest kotek czy nie -->
      <!-- @temp -->
      {{ result }}
      <Button text="TRY AGAIN" :icon="['fas', 'redo']" @click.native="getResult" />
      <Button text="PICK ANOTHER" :icon="['fas', 'arrow-right']" @click.native="clear" />
    </template>
  </main>
</template>

<script>
export default {
  data () {
    return {
      image: null,
      result: null,
      loading: false
    }
  },
  methods: {
    handlePhotoChange (value) {
      this.image = value
      // this.result = this.checkPhoto(value)
    },
    checkPhoto (photo) {
      return Math.random() < 0.5
    },
    clear () {
      this.image = null
      this.result = null
    },
    getResult () {
      this.loading = true
      setTimeout(() => {
        this.result = this.checkPhoto(this.image)
        this.loading = false
      }, 1500)
    }
  }
}
</script>
