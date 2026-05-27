<template>
  <div class="chart-card">
    <div class="chart-header">
      <div>
        <h2 class="chart-title">
          Ventas Mensuales
        </h2>

        <p class="chart-subtitle">
          Rendimiento de ventas del último año
        </p>
      </div>
    </div>

    <!-- TU CHART AQUÍ -->
    <div class="chart-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.chart-card {
  @apply bg-white dark:bg-zinc-900
  border border-zinc-200 dark:border-zinc-800
  rounded-3xl
  p-5 md:p-6
  shadow-sm
  h-full;
}

.chart-header {
  @apply flex items-center justify-between mb-6;
}

.chart-title {
  @apply text-lg md:text-xl font-bold
  text-zinc-900 dark:text-white;
}

.chart-subtitle {
  @apply text-sm text-zinc-500 dark:text-zinc-400 mt-1;
}

.chart-body {
  @apply w-full overflow-hidden;
}
</style>