<template>

  <v-app>
    
    <!-- <v-app-bar title="Hermit Idle"></v-app-bar> -->
    
    <v-container class="py-16">
      <v-main>
        
        <progress-meter
          label="contemplate"
          v-model="contemplationProgress"
          @click="contemplateClicked()"
        />

        <p v-if="maxWisdom > 0" class="text-center">
          {{ session.wisdom }}
          wisdom
        </p>

        <div class="text-center py-16">

          <v-tooltip
            v-if="!session.haveSundial && session.wisdom >= 5"
            text="so you can contemplate the meaning of time"
            location="bottom"
          >
            <template v-slot:activator="{ props }">
              <v-btn v-bind="props" text="build a sundial" @click="buySundial()">
                <template v-slot:append>
                  (5 wisdom)
                </template>
              </v-btn>
            </template>
          </v-tooltip>

          <v-card v-if="session.haveSundial">
            <v-card-text>
              <p class="text-center">imagine this is a sundial</p>
            </v-card-text>
          </v-card>

        </div>

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
      if (maxWisdom.value < session.wisdom) {
        maxWisdom.value = session.wisdom
        switch (session.wisdom) {
          case 1:
            NotificationService.success('you feel as if you have taken the first step of a journey')
            break
          case 3:
            NotificationService.success('thoughts drift across your mind like clouds')
            break
        }
      }
    }
  }

}, { fpsLimit: 30 })

const session = reactive({
  wisdom: 0,
  haveSundial: false,
})

const maxWisdom = ref(0)
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
  session.wisdom -= 5;
  NotificationService.success('the sundial looks nice in your garden')

}

</script>
