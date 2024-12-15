import { ref } from 'vue'

class NotificationService {

  messages = ref([])

  info(message, options = {}) {
    this.publish(message, 'info', options)
  }

  success(message, options = {}) {
    this.publish(message, 'success', options)
  }

  error(message, options = {}) {
    this.publish(message, 'error', options)
  }

  // TODO: probably need some way to clean these out once they've been dismissed, so they don't stay in the ref forever
  publish(text, type, options) {

    const defaultOptions = {
      dismissible: true,
      timeout: 5000,
      show: true,
    }

    const effectiveOptions = Object.assign(defaultOptions, options)

    const typeColors = {
      info: 'grey-darken-3',
      success: 'green',
      error: 'error',
    }

    if (!(type in typeColors)) {
      console.warn(effectiveOptions.type + ' is not a valid message type')
      type = 'info'
    }

    this.messages.value.push({
      text: text,
      color: typeColors[type],
      dismissible: effectiveOptions.dismissible,
      timeout: effectiveOptions.timeout,
      show: true,
    })

  }

}

export default new NotificationService()
