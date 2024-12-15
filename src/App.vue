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

        <p v-if="session.wisdom > 0">wisdom: {{ session.wisdom }}</p>

        <v-tooltip
          v-if="!session.haveSundial && session.wisdom >= 1"
          text="so you can contemplate the meaning of time"
          location="bottom"
        >
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" text="build a sundial" @click="buySundial()">
              <template v-slot:append>
                10
              </template>
            </v-btn>
          </template>
        </v-tooltip>

      </v-main>
    </v-container>

    <notifications />

  </v-app>

</template>


<script setup lang="ts">

import { reactive, ref } from 'vue'
import { useRafFn } from '@vueuse/core'
import Notifications from './components/Notifications.vue'
import ProgressMeter from './components/ProgressMeter.vue'
import NotificationService from './services/NotificationService'

/* const { pause, resume } = */ useRafFn((/* { delta } */) => {
  
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
  haveSundial: false,
})

const contemplating = ref(false)
const contemplationProgress = ref(0)

function contemplateClicked() {

  if (contemplating.value) {
    return
  }

  contemplating.value = true

}

function buySundial() {

  session.haveSundial = true;
  session.wisdom -= 10;
  NotificationService.success('the sundial looks nice in your garden')

}

</script>
