import '../styles/main.scss'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiBrain } from '@mdi/js'


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      contemplate: mdiBrain,
    },
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark',
  },
})

export default vuetify
