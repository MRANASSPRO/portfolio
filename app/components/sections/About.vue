<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="about"
    class="pt-12 md:pt-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.about.title }}
    </h2>

    <div class="gap-6 md:gap-12 grid md:grid-cols-3">
      <div class="col-span-2">
        <p
          v-for="(paragraph, index) in page.about.paragraphs"
          :key="index"
          class="mb-4 last:mb-0 text-muted text-justify"
        >
          {{ paragraph }}
        </p>
      </div>

      <div class="space-y-4">
        <div>
          <h3 class="font-bold text-lg">
            Location
          </h3>
          <span class="text-muted">{{ page.about.location }}</span>
        </div>
        <div>
          <h3 class="font-bold text-lg">
            Email
          </h3>
          <ULink
            :to="`mailto:${page.about.email}`"
            class="text-muted hover:text-default transition-colors"
          >
            {{ page.about.email }}
          </ULink>
        </div>
        <div>
          <h3 class="font-bold text-lg">
            Work Availability
          </h3>
          <span class="text-muted">{{ page.about.availability }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
