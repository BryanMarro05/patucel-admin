<template>
  <div
    class="bg-card border border-border rounded-3xl p-6 hover:border-primary transition-all duration-300"
  >
    <div class="flex items-center justify-between mb-5">
      <div>
        <p class="text-zinc-400 text-sm">
          {{ title }}
        </p>

        <h2 class="text-4xl font-bold mt-2">
          {{ value }}
        </h2>
      </div>

      <div
        class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center"
      >
        <Icon
          :icon="icon"
          class="text-primary text-3xl"
        />
      </div>
    </div>

    <div class="flex items-center gap-2">
      <span
        class="text-green-400 text-sm font-semibold"
      >
        +{{ growth }}%
      </span>

      <span class="text-zinc-500 text-sm">
        este mes
      </span>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  title: String,
  value: String,
  icon: String,
  growth: Number,
})
</script>