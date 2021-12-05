<template>
  <button>
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
    }
  }
}
</script>
