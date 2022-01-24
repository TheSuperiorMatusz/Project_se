<template>
  <div :name="id" class="file-input">
    <label
      class="file-input-label"
    > {{ label }}
    </label>
    <div
      class="image-container"
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
        <div id="cloud">
          <fa :icon="['fas', 'cloud-download-alt']" />
        </div>
        Drop your image here
        <br>
        <h4>
          OR
        </h4>
        <div id="browse">
          Browse files
        </div>
      </label>
      <div style="opacity: 0; position: absolute; pointer-events: none;">
        <input
          :id="id"
          type="file"
          @change="onFileChange"
        >
      </div>
    </div>
    <p id="error" v-if="showError">
        Akceptowane rozszerzenia to: jpg, jpeg, png
      </p>
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
      type: File,
      default: null
    }
  },
  data () {
    return {
      url: null,
      size: null,
      file: null,
      name: null,
      showError: false
    }
  },
  watch: {
    edit () {
      if (this.edit) {
        this.getFileInfo(this.edit)
      } else {
        this.url = null
        this.file = null
        this.size = null
        this.name = null
        this.showError = false
      }
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
      if (event.target.files && event.target.files.length > 0) { this.getFileInfo(event.target.files[0]) }
    },
    // changeFile () {
    // document.getElementById(this.id).click()
    // },
    getFileInfo (file) {
      const acceptedExtensions = ['jpg', 'jpeg', 'png']
      const name = file.name
      let extension = name.split('.')[name.split('.').length - 1]
      extension = extension.toLowerCase()
      if (acceptedExtensions.includes(extension)) {
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
      } else {
        this.showError = true
      }
    }
  }
}
</script>
