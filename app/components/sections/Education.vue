<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="education"
    class="pt-12 md:pt-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.education.title }}
    </h2>

    <div class="space-y-4">
      <div
        v-for="(item, index) in page.education.items"
        :key="index"
        class="p-6 border border-default rounded-lg"
      >
        <div class="flex sm:flex-row flex-col justify-between gap-2">
          <div>
            <h3 class="font-bold text-xl">
              {{ item.degree }}
            </h3>
            <p class="text-muted text-lg">
              {{ item.school }}
            </p>
          </div>
          <div class="text-muted whitespace-nowrap">
            {{ item.date }}
          </div>
        </div>
        <p
          v-if="item.description"
          class="mt-2 text-muted"
        >
          {{ item.description }}
        </p>
      </div>
    </div>

    <h3 class="mt-8 mb-4 font-bold text-xl">
      {{ page.certifications.title }}
    </h3>
    <div class="gap-3 grid sm:grid-cols-2">
      <div
        v-for="(cert, index) in page.certifications.items"
        :key="index"
        class="flex justify-between items-center gap-3 p-3 border border-default rounded-lg"
      >
        <span class="text-sm">{{ cert.name }}</span>
        <span class="text-dimmed text-xs whitespace-nowrap">{{ cert.date }}</span>
      </div>
    </div>
  </section>
</template>
