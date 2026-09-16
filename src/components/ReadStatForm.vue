<script setup lang="ts">
import { useReadStore } from '@/stores/read';
import type { RadioGroupItem } from '@nuxt/ui';
import { ref } from 'vue';

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
    value: 'horizontal',
    class: 'w-20',
  },
  {
    label: 'Vertical',
    icon: 'i-lucide-gap-vertical',
    value: 'vertical',
    class: 'w-20',
  },
])
</script>
<template>
  <UCard title="Input Your Reading Stats">
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

    <div class="flex flex-wrap gap-y-5 gap-x-8">
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
        v-model="store.orientation"
        :items="orientationItems"
        :ui="{
          legend: 'text-default',
        }"
      />
    </div>
  </UCard>
</template>
