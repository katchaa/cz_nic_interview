import { describe, it, expect, beforeEach, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import vuetify from '../../vuetify.preset.js'
import axios from 'axios'

const dataMock = {
  fqdn: "neviditelna-univerzita.cz",
  nsset: {
    handle: "ZEMEPLOCHA-NSSET",
    registrar: "REG-CZNIC",
    dns: [
      {
        name: "dns.zemeplocha.cz",
        ip_address: "1.1.1.1"
      }, {
        name: "dns2.zemeplocha.cz",
        ip_address: "2.2.2.2"
      }
    ]
  },
}

const axiosMock = vi.spyOn(axios, 'get').mockResolvedValue({ data: dataMock })

describe('App.vue', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(App, {
      global: {
        plugins: [vuetify],
      }
    })
    vi.clearAllMocks()
  })
  it('should render', () => {
    expect(wrapper).toBeDefined()
  })

  it('should fetch data on mount and set them into ref', async () => {
    await wrapper.vm.getData()

    expect(axiosMock).toHaveBeenCalledWith('domain-detail.json')
    expect(wrapper.vm.data).toEqual(dataMock)
  })
})


