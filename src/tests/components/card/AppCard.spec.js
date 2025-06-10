import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import vuetify from '../../../../vuetify.preset.js'
import AppCard from '@/components/card/AppCard.vue'
import { VCard, VCardTitle } from 'vuetify/components'

describe('AppCard', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(AppCard, {
      global: {
        plugins: [vuetify],
      },
      props: {
        title: 'Title',
      },
      slots: {
        default: '<p>Test content</p>'
      },
      stubs: [VCard, VCardTitle]
    })
  })
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should render content slot', () => {
    expect(wrapper.html()).toContain('Test content')
  })

  it('should renders title when provided', () => {

    expect(wrapper.find('v-card-title-stub')).toBeDefined
    expect(wrapper.text()).toContain('Title')
  })
})
