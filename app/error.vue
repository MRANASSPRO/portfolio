<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true
  }
})

useHead({
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.'
})

const { data: page } = await useAsyncData('error-name', () =>
  queryCollection('index').first()
)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader
      :links="navLinks"
      :name="page?.hero.name ?? ''"
    />

    <main
      class="flex-1 mx-auto px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)] py-16 w-full max-w-[1450px]"
    >
      <UError :error="error" />
    </main>

    <AppFooter />
  </div>
</template>
