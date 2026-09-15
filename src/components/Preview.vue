<script setup lang="ts">
import { useReadStore } from '@/stores/read'
import { computed } from 'vue'

const store = useReadStore()
const colorClass = computed(() => store.textColor)
</script>

<template>
  <UCard title="Preview">
    <div :class="['px-8 flex flex-col mx-auto items-center space-y-6', colorClass]">
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
      <UIcon name="i-lucide-book-open" class="size-15 text-primary text-center" />
    </div>

    <template #footer>
      <div class="w-full flex justify-center">
        <UButton icon="i-lucide-download" variant="subtle">Download Your Stat</UButton>
      </div>
    </template>
  </UCard>
</template>
