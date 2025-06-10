import { beforeEach, describe, expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import vuetify from '../../../vuetify.preset.js'
import AppUserMenu from '@/components/layout/AppUserMenu.vue'

describe('AppUserMenu.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(AppUserMenu, {
      global: {
        plugins: [vuetify],
      stubs: {
        VMenu: {
          props: ['activator'],
          template: `<div data-qa="user-menu"><slot /></div>`
        },
        VList: {
          template: `<ul><slot /></ul>`
        },
        VListItem: {
          template: `<li data-qa="logout"><slot /></li>`
        },
      }
      },
      props: {
        userName: 'Jan Musílek',
        userRole: 'admin',
        activator: 'activator'
      }
    })
  })

  it('should render user name and role', () => {
    expect(wrapper).toBeDefined()
    expect(wrapper.html()).toContain('Jan Musílek')
    expect(wrapper.html()).toContain('admin')
  })

  it('calls logout on click', async () => {
    const consoleSpy = vi.spyOn(console, 'log')
    const logoutBtn = wrapper.find('li[data-qa="logout"]')

    await wrapper.vm.logout()
    await logoutBtn.trigger('click')

    expect(consoleSpy).toBeCalled()
  })
})
