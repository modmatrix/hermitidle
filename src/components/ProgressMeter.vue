<template>
  
  <v-progress-circular v-model="model" size="64" width="8" class="cursor-pointer">
    {{ model }}
  </v-progress-circular>


</template>

<script setup lang="ts">

const props = defineProps({

  label: {
    type: String,
  },

})

const model = defineModel<number>() // an integer from 0 to 100



</script>
