import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases, // TODO: customize https://vuetifyjs.com/en/features/icon-fonts/#creating-a-custom-icon-set
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
  },
})

export default vuetify
