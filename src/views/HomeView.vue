<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'
import { ref } from 'vue'

const link = ref<ButtonProps>({
  label: 'Star on Github',
  to: 'https://github.com/ukasyaaah/readtrail',
  icon: 'i-lucide-github',
  target: '_blank',
  color: 'primary',
})
</script>
<template>
  <UContainer>
    <UPageSection
      icon="i-lucide-book-open-text"
      title="Read Trail"
      :ui="{
        description: 'items-center mx-auto max-w-xl',
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

      <template #links>
        <UButton variant="soft" v-bind="link" />
        <UColorModeSelect />
      </template>
      <div class="flex flex-wrap justify-center gap-3">
        <ReadStatForm />
        <Preview />
      </div>
    </UPageSection>
  </UContainer>
</template>
