/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark',
    myCustomTheme: {
      dark: false,
      colors: {
        'bg-color-main':    '#a0d901',
        'bg-color-2':       '#000000',
        'text-color-main':  '#000000',
        'text-color-2' :    '#ffffff',
        'text-color-3':     '#4f6b00',
        'text-color-4':     '#3a6d8c',
        'text-color-5':     '#542870',
        'text-color-6':     '#404040',
        'text-color-footer':'#787878',
      },
    },
  },
})

