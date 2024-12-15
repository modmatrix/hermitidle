<template>

  <v-app>
    
    <!-- <v-app-bar title="Hermit Idle"></v-app-bar> -->
    
    <v-container>
      <v-main>
        
        <progress-meter
          label="contemplate"
          v-model="contemplationProgress"
          @click="contemplateClicked()"
        />

        <v-progress-linear v-model="contemplationProgress" />

        #{{ contemplationProgress }}#

        <p v-if="session.wisdom > 0">wisdom: {{ session.wisdom }}</p>

        <v-btn text="i am a button" />

      </v-main>
    </v-container>

  </v-app>

</template>


<script setup lang="ts">

import { reactive, ref } from 'vue'
import { useRafFn } from '@vueuse/core'
import ProgressMeter from './components/ProgressMeter.vue'

const now = ref(0)

const { pause, resume } = useRafFn(({ delta }) => {
  
  // console.log('delta:', delta) // in ms

  if (contemplating.value) {
    contemplationProgress.value += 1
    if (contemplationProgress.value >= 100) {
      contemplating.value = false
      contemplationProgress.value = 0
      session.wisdom += 1
    }
  }

}, { fpsLimit: 30 })

const session = reactive({
  wisdom: 0,
})

const contemplating = ref(false)
const contemplationProgress = ref(0)

function contemplateClicked() {

  if (contemplating.value) {
    return
  }

  contemplating.value = true

}

</script>
