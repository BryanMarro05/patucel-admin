<template>
  <div class="stats-card">
    <div class="stats-top">
      <div>
        <p class="stats-title">
          {{ title }}
        </p>

        <h3 class="stats-value">
          {{ value }}
        </h3>
      </div>

      <div class="stats-icon">
        <Icon :icon="icon" />
      </div>
    </div>

    <div class="stats-growth">
      <span class="growth-badge">
        +{{ growth }}%
      </span>

      <span class="growth-text">
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
  growth: Number
})
</script>

<style scoped>
.stats-card {
  @apply bg-white dark:bg-zinc-900
  border border-zinc-200 dark:border-zinc-800
  rounded-3xl
  p-5
  shadow-sm
  transition-all duration-300
  hover:shadow-xl
  hover:-translate-y-1;
}

.stats-top {
  @apply flex items-start justify-between gap-4;
}

.stats-title {
  @apply text-sm text-zinc-500 dark:text-zinc-400;
}

.stats-value {
  @apply text-2xl md:text-3xl font-bold
  text-zinc-900 dark:text-white
  mt-2;
}

.stats-icon {
  @apply w-14 h-14 rounded-2xl
  flex items-center justify-center
  bg-indigo-100 dark:bg-indigo-500/15
  text-indigo-600 dark:text-indigo-400
  text-2xl;
}

.stats-growth {
  @apply flex items-center gap-2 mt-5;
}

.growth-badge {
  @apply bg-emerald-100 dark:bg-emerald-500/15
  text-emerald-600 dark:text-emerald-400
  text-xs font-semibold
  px-2 py-1 rounded-lg;
}

.growth-text {
  @apply text-sm text-zinc-500 dark:text-zinc-400;
}
</style>