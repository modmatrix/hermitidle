<template>
  <div>

    <v-snackbar
      v-for="message in NotificationService.messages.value"
      :model-value="message.show"
      :timeout="message.timeout"
      :color="message.color"
    >

      {{ message.text }}

      <template v-slot:actions>
        <v-btn
          v-if="message.dismissible"
          color="white"
          variant="text"
          @click="message.show = false"
        >
          <v-icon>$close</v-icon>
        </v-btn>
      </template>

    </v-snackbar>

  </div>
</template>

<script setup lang="ts">

import NotificationService from '../services/NotificationService'

</script>
