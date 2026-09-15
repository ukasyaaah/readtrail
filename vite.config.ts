import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ui from '@nuxt/ui/vite'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'orange',
          secondary: 'fuchsia',
          neutral: 'neutral',
        },
       
        button: {
          defaultVariants: {
            variant: 'outline',
          },
        },
        badge: {
          defaultVariants: {
            variant: 'outline',
          },
        },
        input: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        select: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        textarea: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        selectMenu: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        inputMenu: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        inputNumber: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        inputTags: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        inputDate: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        inputTime: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
        pinInput: {
          defaultVariants: {
            variant: 'subtle',
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
