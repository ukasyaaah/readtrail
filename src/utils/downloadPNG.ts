import { useReadStore } from '@/stores/read'
import { toPng } from 'html-to-image'

const store = useReadStore()
const toast = useToast()

export async function downloadPNG(
  element: HTMLElement | null,
  fileName = 'read-trail-stat.png',
  pixelRatio = 2,
) {
  if (!element) {
    return
  }

  if (!store.pages) {
    toast.add({
      title: 'Pages read is required',
      description: "Please enter the number of pages you've read",
      icon: 'i-lucide-circle-alert',
      color: 'error',
    })
    return
  }

  try {
    await document.fonts.ready

    const dataUrl = await toPng(element, {
      backgroundColor: undefined,
      pixelRatio,
      cacheBust: true,
    })

    const link = document.createElement('a')
    link.download = fileName.endsWith('.png') ? fileName : `${fileName}.png`
    link.href = dataUrl
    link.click()

    return toast.add({
      title: 'Success',
      description: 'Your reading stat has been downloaded',
      icon: 'i-lucide-circle-check',
      color: 'success',
    })
  } catch (error) {
    return toast.add({
      title: 'Download failed',
      description: 'Something went wrong while generating your image. Please try again.',
      icon: 'i-lucide-circle-x',
      color: 'error',
    })
  }
}
