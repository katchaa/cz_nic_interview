import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import vuetify from '../../../vuetify.preset.js'
import AppDrawer from '@/components/layout/AppDrawer.vue'
import { nextTick } from 'vue'

const itemsMock = [
  {
    label: 'Registry',
    icon: 'mdi-earth',
  },

  {
    label: 'Home',
    icon: 'mdi-home',
  }
]

describe('AppDrawer.vue', () => {
  let wrapper
  let items
  beforeEach(() => {
    wrapper = mount(AppDrawer, {
      global: {
        plugins: [vuetify],
        stubs: {
          VListItem: {
            props: ['active', 'activeClass', 'subtitle', 'prependIcon'],
            emits: ['click'],
            template: `
              <button
                data-qa="list-item"
                :class="{ [activeClass]: active }"
                @click="$emit('click')"
              >
              </button>
            `
          },
          VNavigationDrawer: {
            template: `<div><slot /></div>`
          },
        }
      },
      props: {
        visible: true,
        items: itemsMock
      }
    })
    items = wrapper.findAll('[data-qa="list-item"]')
  })

  it('renders all list items', () => {
    const itemsTrim = items.splice(1, 2)

    expect(itemsTrim.length).toBe(itemsMock.length)
  })

  it('marks the first item as active initially', () => {
    const itemsTrim = items.splice(1, 2)

    expect(itemsTrim[0].classes()).toContain('bg-warning')
    expect(itemsTrim[1].classes()).not.toContain('bg-warning')
  })

  it('changes active item on click', async () => {
    const itemsTrim = items.splice(1, 2)

    await itemsTrim[1].trigger('click')
    await nextTick()

    expect(itemsTrim[1].classes()).toContain('bg-warning')
    expect(itemsTrim[0].classes()).not.toContain('bg-warning')
  })
})
