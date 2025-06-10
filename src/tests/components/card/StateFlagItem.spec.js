import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import StateFlagItem from '@/components/card/StateFlagItem.vue'
import vuetify from '../../../../vuetify.preset.js'
import { VIcon } from 'vuetify/components'

const activeItem = {
  active: true,
  description: 'Item is active'
}

const inactiveItem = {
  active: false,
  description: 'Item is inactive'
}

describe('StateFlagItem', () => {
  let wrapper
  let icon
  let text
  beforeEach(() => {
    wrapper = shallowMount(StateFlagItem, {
      props: { item: activeItem },
      stubs: [VIcon],
      global: {
        plugins: [vuetify],
      }
    })
    icon = wrapper.find('v-icon-stub')
    text = wrapper.find('span')
  })

  it('should render active state correctly', async () => {
    await wrapper.setProps({ item: activeItem })

    expect(icon.attributes('icon')).toBe('mdi-check-circle')
    expect(icon.attributes('color')).toBe('success')
    expect(text.text()).toBe('Item is active')
    expect(text.classes()).toContain('text-success')
  })

  it('renders inactive state correctly', async () => {
    await wrapper.setProps({ item: inactiveItem })

    expect(icon.attributes('icon')).toBe('mdi-close-circle')
    expect(icon.attributes('color')).toBe('error')
    expect(text.text()).toBe('Item is inactive')
    expect(text.classes()).toContain('text-error')
  })
})
