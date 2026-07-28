<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const props = defineProps<{
  page: IndexCollectionItem
}>()

/** Index of the tab currently shown, as a string because UTabs uses string values. */
const active = ref('0')

const tabItems = computed(() =>
  props.page.skills.tabs.map((tab, index) => ({
    label: tab.label,
    value: String(index)
  }))
)

/** Categories belonging to the selected tab. */
const activeCategories = computed(() =>
  props.page.skills.tabs[Number(active.value)]?.categories ?? []
)
</script>

<template>
  <section
    id="skills"
    class="pt-12 md:pt-16"
  >
    <h2 class="mb-8 font-bold text-2xl md:text-3xl tracking-tighter">
      {{ page.skills.title }}
    </h2>

    <!--
      `content: false` turns UTabs into just the row of buttons; the panel below is
      rendered by this component so switching is driven purely by `active`.
      `activation-mode="manual"` means a tab changes on click, not merely on focus.
    -->
    <UTabs
      v-model="active"
      :items="tabItems"
      :content="false"
      activation-mode="manual"
      color="neutral"
      class="w-full"
      :ui="{ trigger: 'grow' }"
    />

    <div class="mt-4">
      <div
        v-for="category in activeCategories"
        :key="category.name"
      >
        <h3 class="font-medium text-lg">
          {{ category.name }}
        </h3>
        <div class="flex flex-wrap gap-2 mt-2 mb-4">
          <UBadge
            v-for="skill in category.items"
            :key="skill"
            :label="skill"
            color="neutral"
            variant="solid"
            size="lg"
            class="rounded-full px-4"
          />
        </div>
      </div>
    </div>
  </section>
</template>
