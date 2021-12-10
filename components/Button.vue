<template>
  <button :disabled="disabled">
    {{ text }}
    <fa v-if="icon" :icon="icon" />
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: Array,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>
