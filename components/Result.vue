<template>
  <div id="flex">
    <div v-if="result" id="true">
      <fa :icon="['fas', 'check-circle']" />
      CORRECT, THAT'S A CAT
      <fa :icon="['fas', 'check-circle']" />
    </div>
    <div v-else id="false">
      <fa :icon="['fas', 'times-circle']" />
      WRONG, THATS NOT A CAT
      <fa :icon="['fas', 'times-circle']" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    result: {
      type: Boolean,
      default: null
    }
  }
}
</script>
