<template>
  <AdminLayout>
    <div>
      <!-- HEADER -->
      <div class="mb-10">
        <h1 class="text-4xl font-bold">
          Dashboard
        </h1>

        <p class="text-zinc-400 mt-2">
          Bienvenido nuevamente al panel Patucel.
        </p>
      </div>

      <!-- STATS -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6"
      >
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
      </div>

      <!-- CONTENT -->
      <div
        class="grid grid-cols-1 xl:grid-cols-3 gap-6"
      >
        <!-- CHART -->
        <div class="xl:col-span-2">
          <SalesChart />
        </div>

        <!-- PRODUCTS -->
        <div>
          <TopProducts />
        </div>
      </div>
    </div>
  </AdminLayout>
</template>

<script setup>
import AdminLayout from '../../components/layout/AdminLayout.vue'

import StatsCard from '../../components/dashboard/StatsCard.vue'

import SalesChart from '../../components/dashboard/SalesChart.vue'

import TopProducts from '../../components/dashboard/TopProducts.vue'
</script>