import { beforeEach, describe, expect, it } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import vuetify from '../../../vuetify.preset.js'
import AppHeader from '@/components/layout/AppHeader.vue'

const userInfoData = {
  firstName: 'Jan',
  lastName: 'Musílek',
  role: 'admin',
}

describe('AppHeader.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AppHeader, {
      global: {
        plugins: [vuetify],
        stubs: {
          VAppBar: {
            template: `<div><slot name="prepend"/></div>`
          },
          VAppNavBarIcon: {
            template: `<button #prepend data-qa="header-menu-btn" @click="toggleDrawer"></button>`
          }
        }
      },
      props: {
        userInfo: userInfoData,
      }
    })
  })
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should compute full name correctly', () => {
    const fullName = wrapper.vm.fullName

    expect(fullName).toEqual('Jan Musílek')
  })

  it('should emit on menu btn click', async () => {
    const btn = wrapper.find('[data-qa="header-menu-btn"]')
    const drawerVisible = wrapper.vm.drawerVisible

    await btn.trigger('click')

    expect(drawerVisible).toBeTruthy()
    expect(wrapper.vm.toggleDrawer).toBeTruthy()
    expect(wrapper.emitted('toggleDrawer')).toBeTruthy()
  })
})
