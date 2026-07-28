<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <section
    id="contact"
    class="pt-12 md:pt-16 pb-12 md:pb-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.contact.title }}
    </h2>

    <div class="p-6 border border-default rounded-lg">
      <p class="mb-6 max-w-[700px] text-muted">
        {{ page.contact.description }}
      </p>

      <div class="gap-6 grid sm:grid-cols-2 mb-6">
        <div>
          <h3 class="font-bold text-lg">
            Email
          </h3>
          <ULink
            :to="`mailto:${page.contact.email}`"
            class="text-muted hover:text-default transition-colors"
          >
            {{ page.contact.email }}
          </ULink>
        </div>
        <div v-if="page.contact.phone">
          <h3 class="font-bold text-lg">
            Phone
          </h3>
          <ULink
            :to="`tel:${page.contact.phone.replace(/\s/g, '')}`"
            class="text-muted hover:text-default transition-colors"
          >
            {{ page.contact.phone }}
          </ULink>
        </div>
      </div>

      <div class="flex flex-wrap gap-2">
        <UButton
          v-for="(link, index) in page.contact.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'outline', ...link }"
        />
      </div>
    </div>
  </section>
</template>
