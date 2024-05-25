<template>
  <div>
    Nuxt module playground!
    <testComponent />
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    console.log('Auto import from playground: ')
    composableSample()
  },
};
</script>
