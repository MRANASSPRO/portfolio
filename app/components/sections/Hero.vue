<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="hero"
    class="pt-12 md:pt-16"
  >
    <div class="flex md:flex-row flex-col-reverse md:gap-12 w-full">
      <div class="flex flex-col flex-1 space-y-4">
        <div class="justify-items-center md:justify-items-start mt-4 md:mt-0">
          <h1 class="font-bold text-3xl sm:text-5xl xl:text-6xl/none tracking-tighter">
            {{ page.hero.name }}
          </h1>
          <h2 class="font-medium text-muted text-xl sm:text-2xl">
            {{ page.hero.role }}
          </h2>
        </div>

        <p class="max-w-[600px] text-muted md:text-xl">
          {{ page.hero.description }}
        </p>

        <div class="flex gap-2">
          <UButton
            v-for="(link, index) in page.hero.links"
            :key="index"
            v-bind="link"
          />
        </div>

        <div class="flex gap-2 pt-2">
          <UButton
            v-for="(social, index) in page.hero.socials"
            :key="index"
            :icon="social.icon"
            :to="social.to"
            :target="social.target"
            :aria-label="social.label"
            color="neutral"
            variant="ghost"
            size="md"
            class="rounded-full"
          />
        </div>
      </div>

      <div class="flex justify-center md:justify-end flex-shrink-0">
        <NuxtImg
          :src="page.hero.image.src"
          :alt="page.hero.image.alt"
          width="280"
          height="280"
          class="rounded-full size-40 md:size-70 object-cover ring ring-default"
        />
      </div>
    </div>
  </section>
</template>
