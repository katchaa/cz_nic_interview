import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#FFFFFF',
    primary: '#039BE5',
    'primary-darken-1': '#0277BD',
    secondary: '#E0E0E0',
    'secondary-darken-1': '#757575',
    danger: '#D50000',
    info: '#00B0FF',
    success: '#00C853',
    warning: '#FFC400',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  icon: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  }
})

export default vuetify
