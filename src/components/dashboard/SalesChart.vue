<template>
  <div
    class="bg-card border border-border rounded-3xl p-6"
  >
    <div class="flex items-center justify-between mb-8">
      <div>
        <h2 class="text-2xl font-bold">
          Ventas
        </h2>

        <p class="text-zinc-400 mt-1">
          Rendimiento mensual
        </p>
      </div>

      <button
        class="bg-primary text-black px-4 py-2 rounded-xl font-semibold"
      >
        Exportar
      </button>
    </div>

    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script setup>
const series = [
  {
    name: 'Ventas',
    data: [1200, 2100, 1800, 2800, 3500, 4200, 3900],
  },
]

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },

    background: 'transparent',
  },

  theme: {
    mode: 'dark',
  },

  dataLabels: {
    enabled: false,
  },

  stroke: {
    curve: 'smooth',
    width: 4,
  },

  colors: ['#facc15'],

  grid: {
    borderColor: '#27272a',
  },

  xaxis: {
    categories: [
      'Lun',
      'Mar',
      'Mié',
      'Jue',
      'Vie',
      'Sáb',
      'Dom',
    ],

    labels: {
      style: {
        colors: '#71717a',
      },
    },
  },

  yaxis: {
    labels: {
      style: {
        colors: '#71717a',
      },
    },
  },

  tooltip: {
    theme: 'dark',
  },
}
</script>