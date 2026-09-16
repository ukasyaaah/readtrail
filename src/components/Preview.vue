<script setup lang="ts">
import { useReadStore } from '@/stores/read'
import { downloadPNG } from '@/utils/downloadPNG'
import { ref } from 'vue'
import { computed } from 'vue'

const store = useReadStore()
const colorClass = computed(() => store.textColor)
const previewRef = ref<HTMLElement | null>(null)
</script>

<template>
  <UCard title="Preview" :ui="{root: 'min-w-full md:min-w-0'}">
    <div
      v-if="store.orientation === 'horizontal'"
      ref="previewRef"
      :class="['px-8 flex flex-col mx-auto items-center space-y-6', colorClass]"
    >
      <section class="text-center">
        <p>Distance</p>
        <p class="text-2xl font-semibold">{{ store.pages ? store.pages : 0 }} Pages</p>
      </section>
      <section class="text-center">
        <p>Time</p>
        <p class="text-2xl font-semibold">
          {{ store.time.hour ? store.time.hour : 0 }}h
          {{ store.time.minute ? store.time.minute : 0 }}m
        </p>
      </section>
      <section class="text-center">
        <p>Pace</p>
        <p class="text-2xl font-semibold">{{ store.pace }} / page</p>
      </section>
      <div class="flex max-w-xs flex-col mx-auto items-center gap-y-2">
        <UIcon name="i-lucide-book-open" class="size-15 text-primary text-center" />
        <p class="font-semibold wrap-anywhere text-center" v-if="store.title">{{ store.title }}</p>
      </div>
    </div>
    <div v-else ref="previewRef" :class="['flex justify-center items-center sm:gap-x-3 md:gap-x-7 flex-row-reverse', colorClass]">
      <div class="space-y-6 p-7">
        <section class="text-center">
          <p>Distance</p>
          <p class="text-xl font-semibold">{{ store.pages ? store.pages : 0 }} Pages</p>
        </section>
        <section class="text-center">
          <p>Time</p>
          <p class="text-xl font-semibold">
            {{ store.time.hour ? store.time.hour : 0 }}h
            {{ store.time.minute ? store.time.minute : 0 }}m
          </p>
        </section>
        <section class="text-center">
          <p>Pace</p>
          <p class="text-xl font-semibold">{{ store.pace }} /page</p>
        </section>
      </div>
      <div class="flex max-w-xs flex-col gap-y-2 justify-center items-center">
        <UIcon name="i-lucide-book-open" class="size-27 text-primary text-center" />
        <p class="font-semibold wrap-anywhere w-full px-4 text-center" v-if="store.title">
          {{ store.title }}
        </p>
      </div>
    </div>

    <template #footer>
      <div class="w-full flex justify-center">
        <UButton @click="() => downloadPNG(previewRef)" icon="i-lucide-download" variant="subtle"
          >Download Your Stat</UButton
        >
      </div>
    </template>
  </UCard>
</template>
