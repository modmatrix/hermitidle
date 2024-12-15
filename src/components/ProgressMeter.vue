<template>
  <div class="text-center">

    <v-progress-circular
      v-model="model"
      size="64"
      width="8"
      class="cursor-pointer mb-2"
    >
      <v-icon icon="$contemplate" />
    </v-progress-circular>
      
    <p v-if="label">{{ label }}</p>

  </div>
</template>

<script setup lang="ts">

const props = defineProps({

  label: {
    type: String,
  },

})

const model = defineModel<number>() // an integer from 0 to 100

</script>
