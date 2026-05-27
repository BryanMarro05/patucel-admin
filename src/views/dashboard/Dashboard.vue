<template>
  <AdminLayout>
    <div class="dashboard-page w-full">
      <!-- HEADER -->
      <section class="dashboard-header">
        <div>
          <h1 class="dashboard-title text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
            Dashboard
          </h1>

          <p class="dashboard-subtitle text-sm md:text-base text-zinc-500 dark:text-zinc-400">
            Bienvenido nuevamente al panel Patucel.
          </p>
        </div>
      </section>

      <!-- STATS -->
      <section class="stats-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">
        <StatsCard
          title="Ventas"
          value="$24,500"
          icon="solar:wallet-money-bold"
          :growth="12"
        />

        <StatsCard
          title="Pedidos"
          value="1,245"
          icon="solar:cart-large-2-bold"
          :growth="8"
        />

        <StatsCard
          title="Clientes"
          value="840"
          icon="solar:users-group-rounded-bold"
          :growth="14"
        />

        <StatsCard
          title="Productos"
          value="185"
          icon="solar:box-bold"
          :growth="5"
        />
      </section>

      <!-- CONTENT -->
      <section class="dashboard-content">
        <!-- CHART -->
        <div class="chart-wrapper xl:col-span-2 min-w-0">
          <SalesChart />
        </div>

        <!-- TOP PRODUCTS -->
        <div class="products-wrapper min-w-0">
          <TopProducts />
        </div>
      </section>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '@/components/layout/AdminLayout.vue'
import StatsCard from '@/components/dashboard/StatsCard.vue'
import SalesChart from '@/components/dashboard/SalesChart.vue'
import TopProducts from '@/components/dashboard/TopProductos.vue'
</script>

<style scoped>
/* stylelint-disable at-rule-no-unknown */
.dashboard-page {
  /* ensure rule is not empty to satisfy stylelint */
  padding: 0;
}

/* HEADER */

.dashboard-header {
  display: flex;
  flex-direction: column;
  gap: 0.5rem; /* gap-2 */
  margin-bottom: 2rem; /* mb-8 */
}

.dashboard-title {
  /* kept intentionally minimal: inherits font and color from markup */
  margin: 0;
}

/* STATS */

.stats-grid {
  /* layout utilities applied in markup */
  display: grid;
}

/* CONTENT */

.dashboard-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (min-width: 1280px) {
  .dashboard-content {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>