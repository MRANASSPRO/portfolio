<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="experience"
    class="pt-12 md:pt-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.experience.title }}
    </h2>

    <div class="space-y-8">
      <div
        v-for="(item, index) in page.experience.items"
        :key="index"
        class="p-6 border border-default rounded-lg"
      >
        <div class="flex sm:flex-row flex-col justify-between gap-2 mb-4">
          <div>
            <h3 class="font-bold text-xl">
              {{ item.position }}
            </h3>
            <p class="text-muted text-lg">
              {{ item.company }}
            </p>
          </div>
          <div class="text-muted whitespace-nowrap">
            {{ item.date }}
          </div>
        </div>

        <ul class="space-y-2 ml-6 text-muted list-disc">
          <li
            v-for="(achievement, i) in item.achievements"
            :key="i"
          >
            {{ achievement }}
          </li>
        </ul>

        <p
          v-if="item.tech"
          class="mt-4 text-dimmed text-sm"
        >
          <span class="font-medium">Tech:</span> {{ item.tech }}
        </p>
      </div>
    </div>
  </section>
</template>
