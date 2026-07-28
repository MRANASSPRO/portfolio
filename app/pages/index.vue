<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <div v-if="page">
    <SectionsHero :page />
    <SectionsAbout :page />
    <SectionsExperience :page />
    <SectionsSkills :page />
    <SectionsProjects :page />
    <SectionsEducation :page />
    <SectionsContact :page />
  </div>
</template>
