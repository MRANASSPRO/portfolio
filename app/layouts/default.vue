<script setup lang="ts">
const { data: page } = await useAsyncData('layout-name', () =>
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
      class="flex-1 mx-auto px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)] w-full max-w-[1450px]"
    >
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
