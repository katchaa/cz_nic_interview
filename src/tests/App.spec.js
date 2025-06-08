import { describe, it, expect, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import vuetify from '../../vuetify.preset.js'


describe('App', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        plugins: [vuetify],
      }
    })
  })
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })
})
