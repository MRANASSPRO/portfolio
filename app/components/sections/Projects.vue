<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="projects"
    class="pt-12 md:pt-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.projects.title }}
    </h2>

    <div class="gap-4 grid sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(project, index) in page.projects.items"
        :key="index"
        class="rounded-lg bg-default ring ring-default"
      >
        <div class="p-2 sm:p-3">
          <div class="bg-muted rounded-lg aspect-video overflow-hidden">
            <NuxtImg
              :src="project.image.src"
              :alt="project.image.alt"
              class="w-full h-full object-cover hover:scale-105 transition-all"
            />
          </div>

          <div>
            <h3 class="mt-2 font-bold text-xl">
              {{ project.title }}
            </h3>
            <p class="text-muted">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2 mt-4">
              <UBadge
                v-for="(tag, i) in project.tags"
                :key="i"
                :label="tag"
                color="primary"
                variant="outline"
                size="sm"
                class="rounded-full"
              />
            </div>

            <div class="flex gap-2 mt-2">
              <UButton
                v-for="(link, i) in project.links"
                :key="i"
                v-bind="{ color: 'neutral', variant: 'outline', size: 'sm', ...link }"
                class="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
