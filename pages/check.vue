<template>
  <main>
    <Loader v-if="loading" />
    <InputFile label="YOUR PICTURE" :edit="image && image.file" @set="(value) => handlePhotoChange(value)" />
    <div id="con">
      <Button v-if="result === null" text="CONTINUE" :disabled="image === null" :icon="['fas', 'arrow-right']" @click.native="() => getResult()" />
      <template v-else>
        <!-- @MACIEJ tutaj wstaw nowy komponent, do ktorego np. przeslesz rozny tekst i typ (success, fail) zaleznie od zmiennej result. Ma wyswietlac czy jest kotek czy nie -->
        <!-- @temp -->
        <Result :result="result" />
        <div id="buttons">
          <Button id="again" text="TRY AGAIN" :icon="['fas', 'redo']" @click.native="getResult" />
          <Button id="con" text="PICK ANOTHER" :icon="['fas', 'arrow-right']" @click.native="clear" />
        </div>
      </template>
    </div>
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
    },
    checkPhoto (photo) {
      // let formData = new FormData();
      // formData.append('')
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
