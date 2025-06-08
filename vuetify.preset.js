import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const customTheme = {
  dark: false,
  colors: {
    background: '#F5F5F5',
    surface: '#F5F5F5',
    'surface-bright': '#F5F5F5',
    'surface-light': '#E0E0E0',
    'surface-variant': '#424242',
    'on-surface-variant': '#E0E0E0',
    primary: '#039BE5',
    'primary-darken-1': '#0277BD',
    secondary: '#BDBDBD',
    'secondary-darken-1': '#757575',
    error: '#B00020',
    info: '#00B0FF',
    success: '#00C853',
    warning: '#FFD600',
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
