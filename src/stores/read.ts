import { defineStore } from 'pinia'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

export const useReadStore = defineStore('read', {
  state: () => ({
    pages: undefined,
    title: '',
    time: {
      hour: undefined,
      minute: undefined,
    },
    textColor:
      colorMode.value === 'dark' ? 'text-white' : ('text-black' as 'text-black' | 'text-white'),
    orientation: 'horizontal' as 'horizontal' | 'vertical',
  }),
  getters: {
    totalMinutes: (state): number => {
      const hour = state.time.hour ?? 0
      const minute = state.time.minute ?? 0
      return hour * 60 + minute
    },
    minutesPerPage(): number | null {
      const pages = this.pages
      const totalMinutes = this.totalMinutes

      if (!pages || pages <= 0 || totalMinutes <= 0) {
        return null
      }

      return totalMinutes / pages
    },
    pace(): string {
      const minutesPerPage = this.minutesPerPage

      if (minutesPerPage === null) {
        return '0:00'
      }

      const minutes = Math.floor(minutesPerPage)
      const seconds = Math.round((minutesPerPage - minutes) * 60)

      return `${minutes}:${seconds.toString().padStart(2, '0')}`
    },
  },
  actions: {},
})
