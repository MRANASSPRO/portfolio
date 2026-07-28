<script setup lang="ts">
defineProps<{
  links: AnchorLink[]
  name: string
}>()

const { global } = useAppConfig()
const open = ref(false)
</script>

<template>
  <header
    class="top-0 z-50 sticky bg-default/95 supports-[backdrop-filter]:bg-default/60 backdrop-blur border-b border-default"
  >
    <div
      class="flex items-center mx-auto px-[var(--px-fluid-sm)] md:px-[var(--px-fluid-md)] max-w-[1450px] h-14"
    >
      <div class="flex flex-1 items-center mr-4">
        <ULink
          to="#hero"
          class="flex items-center mr-6 font-bold text-default"
        >
          {{ name }}
        </ULink>

        <nav class="hidden md:flex items-center space-x-6 font-medium text-sm">
          <ULink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-muted hover:text-default transition-colors"
          >
            {{ link.label }}
          </ULink>
        </nav>
      </div>

      <div class="flex items-center space-x-2">
        <UButton
          icon="i-lucide-download"
          label="Resume"
          color="neutral"
          variant="outline"
          size="sm"
          :to="global.resume"
          target="_blank"
          class="hidden sm:inline-flex"
        />
        <ColorModeButton />
        <UButton
          :icon="open ? 'i-lucide-x' : 'i-lucide-menu'"
          color="neutral"
          variant="ghost"
          size="sm"
          class="md:hidden"
          :aria-label="open ? 'Close menu' : 'Open menu'"
          @click="open = !open"
        />
      </div>
    </div>

    <nav
      v-if="open"
      class="md:hidden flex flex-col px-[var(--px-fluid-sm)] pb-4 border-t border-default"
    >
      <ULink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="py-2 font-medium text-muted hover:text-default text-sm transition-colors"
        @click="open = false"
      >
        {{ link.label }}
      </ULink>
      <UButton
        icon="i-lucide-download"
        label="Resume"
        color="neutral"
        variant="outline"
        size="sm"
        :to="global.resume"
        target="_blank"
        class="sm:hidden mt-2 w-fit"
      />
    </nav>
  </header>
</template>
