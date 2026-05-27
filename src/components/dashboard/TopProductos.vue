<template>
  <div
    class="bg-card border border-border rounded-3xl p-6"
  >
    <h2 class="text-2xl font-bold mb-6">
      Productos Top
    </h2>

    <div class="space-y-5">
      <div
        v-for="product in products"
        :key="product.name"
        class="flex items-center justify-between"
      >
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-2xl bg-zinc-800"
          />

          <div>
            <h3 class="font-semibold">
              {{ product.name }}
            </h3>

            <p class="text-zinc-500 text-sm">
              {{ product.sales }} ventas
            </p>
          </div>
        </div>

        <span class="font-bold text-primary">
          ${{ product.total }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    name: 'Papel Higiénico Premium',
    sales: 124,
    total: 2400,
  },

  {
    name: 'Servilletas Ultra',
    sales: 92,
    total: 1800,
  },

  {
    name: 'Toallas Industriales',
    sales: 65,
    total: 1600,
  },
]
</script>