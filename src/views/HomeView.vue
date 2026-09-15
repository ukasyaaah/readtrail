<script setup lang="ts">
import Preview from '@/components/Preview.vue'
import { useReadStore } from '@/stores/read'
import type { RadioGroupItem } from '@nuxt/ui'
import { ref } from 'vue'

const store = useReadStore()

const textColorItems = ref<RadioGroupItem[]>([
  {
    label: 'White',
    icon: 'i-lucide-sun',
    value: 'text-white',
    class: 'w-20',
  },
  {
    label: 'Black',
    icon: 'i-lucide-moon',
    value: 'text-black',
    class: 'w-20',
  },
])

const orientationItems = ref<RadioGroupItem[]>([
  {
    label: 'Horizontal',
    icon: 'i-lucide-gap-horizontal',
    value: 'white',
    class: 'w-20',
  },
  {
    label: 'Vertical',
    icon: 'i-lucide-gap-vertical',
    value: 'black',
    class: 'w-20',
  },
])
</script>
<template>
  <UContainer>
    <UPageSection
      icon="i-lucide-book-open-text"
      title="Read Trail"
      :ui="{
        description: ' items-center mx-auto max-w-xl',
      }"
    >
      <template #description>
        <p>
          Tag
          <a
            target="_blank"
            href="https://instagram.com/ukasyaaah"
            class="text-primary font-semibold"
            >@ukasyaaah</a
          >
          on social when you share, and bookmark this page so you can come back after every session.
        </p>
      </template>
      <div class="flex flex-wrap justify-center gap-3">
        <UCard title="Input Yur Curr Stat">
          <UForm :state="store.$state" class="space-y-5 w-full">
            <UFormField class="w-full" label="Pages Read" name="page">
              <UInputNumber placeholder="Pages" class="w-full" required v-model="store.pages" />
            </UFormField>

            <div class="flex gap-x-5">
              <UFormField class="w-full" label="Hour" name="tags" :error-pattern="/^tags\..+/">
                <UInputNumber placeholder="Hour" v-model="store.time.hour" />
              </UFormField>

              <UFormField class="w-full" label="Minutes" name="tags" :error-pattern="/^tags\..+/">
                <UInputNumber placeholder="Minutes" v-model="store.time.minute" />
              </UFormField>
            </div>
            <UFormField class="w-full" label="Book Title" hint="optional" name="page">
              <UInput placeholder="Laut Bercerita" class="w-full" v-model="store.title" />
            </UFormField>
          </UForm>

          <USeparator class="my-5" />

          <div class="flex gap-x-8">
            <URadioGroup
              legend="Text Color"
              variant="table"
              size="sm"
              orientation="horizontal"
              default-value="white"
              indicator="hidden"
              v-model="store.textColor"
              :items="textColorItems"
              :ui="{
                legend: 'text-default',
              }"
            />

            <URadioGroup
              legend="Orientation"
              variant="table"
              size="sm"
              indicator="hidden"
              orientation="horizontal"
              default-value="white"
              v-model="store.textColor"
              :items="orientationItems"
              :ui="{
                legend: 'text-default',
              }"
            />
          </div>
        </UCard>
        <Preview />
      </div>
    </UPageSection>
  </UContainer>
</template>
