<template>
  <div :name="id" class="file-input">
    <label
      class="file-input-label"
    > {{ label }}
    </label>
    <div
      class="image-container"
      @click="changeFile"
      @dragover="(event) => {
        event.preventDefault();
      }"
      @drop="handleDrop"
    >
      <!-- to jest podglad obrazka -->
      <img
        v-if="url"
        :src="url"
        :title="size ? size: ''"
        alt="obrazek"
      >
      <!-- z tego labela zrob ten element w figmie ktory jest pustym prostokątem i na niego masz upuscic obrazek -->
      <label v-else :for="id">
        kliknij /  upuść tutaj
      </label>
      <div style="opacity: 0; position: absolute; pointer-events: none;">
        <input
          :id="id"
          type="file"
          @change="onFileChange"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: 'input-file'
    },
    edit: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      url: null,
      size: null,
      file: null,
      name: null
    }
  },
  watch: {
    edit () {
      this.getFileInfo(this.edit)
    }
  },
  methods: {
    handleDrop (event) {
      event.preventDefault()

      if (event.dataTransfer.items) {
        for (let i = 0; i < event.dataTransfer.items.length; i++) {
          if (event.dataTransfer.items[i].kind === 'file') {
            this.getFileInfo(event.dataTransfer.items[i].getAsFile())
          }
        }
      } else {
        for (let i = 0; i < event.dataTransfer.files.length; i++) {
          this.getFileInfo(event.dataTransfer.files[i])
        }
      }
    },
    onFileChange (event) {
      this.getFileInfo(event.target.files[0])
    },
    changeFile () {
      document.getElementById(this.id).click()
    },
    getFileInfo (file) {
      try {
        this.url = URL.createObjectURL(file)
        this.name = file.name
        this.file = file
        this.$emit('set', { file: this.file, url: this.url })
      } catch (e) {
        this.url = null
        this.name = null
        this.file = null
      }
    }
  }
}
</script>
