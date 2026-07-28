<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <footer class="border-t border-default">
    <div
      class="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)] py-6 max-w-[1450px]"
    >
      <p class="text-muted text-sm">
        {{ footer.credits }}
      </p>

      <div class="flex gap-1">
        <UButton
          v-for="(link, index) of footer?.links"
          :key="index"
          v-bind="{ size: 'sm', color: 'neutral', variant: 'ghost', ...link }"
          class="rounded-full"
        />
      </div>
    </div>
  </footer>
</template>
