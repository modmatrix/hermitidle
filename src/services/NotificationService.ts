import { ref } from 'vue'

type MessageEnvelope = {
  text: string
  color: string
  dismissible: boolean
  timeout: number
  show: boolean
}

class NotificationService {

  messages = ref<MessageEnvelope[]>([])

  info(message: string, options: any = {}) {
    this.publish(message, 'info', options)
  }

  success(message: string, options: any = {}) {
    this.publish(message, 'success', options)
  }

  error(message: string, options: any = {}) {
    this.publish(message, 'error', options)
  }

  // TODO: probably need some way to clean these out once they've been dismissed, so they don't stay in the ref forever
  publish(message: string, type: string, options: any) {

    const defaultOptions = {
      dismissible: true,
      timeout: 5000,
      show: true,
    }

    const effectiveOptions = Object.assign(defaultOptions, options)

    const typeColors: any = {
      info: 'grey-darken-3',
      success: 'green',
      error: 'error',
    }

    if (!(type in typeColors)) {
      console.warn(effectiveOptions.type + ' is not a valid message type')
      type = 'info'
    }

    this.messages.value.push({
      text: message,
      color: typeColors[type],
      dismissible: effectiveOptions.dismissible,
      timeout: effectiveOptions.timeout,
      show: true,
    })

  }

}

export default new NotificationService()
