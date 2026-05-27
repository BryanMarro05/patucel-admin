<template>
  <div class="products-card">
    <div class="products-header">
      <div>
        <h2 class="products-title">
          Productos Top
        </h2>

        <p class="products-subtitle">
          Más vendidos recientemente
        </p>
      </div>
    </div>

    <div class="products-list">
      <div
        v-for="product in products"
        :key="product.name"
        class="product-item"
      >
        <div class="product-left">
          <div class="product-image">
            <Icon icon="solar:box-bold" />
          </div>

          <div>
            <h3 class="product-name">
              {{ product.name }}
            </h3>

            <p class="product-sales">
              {{ product.sales }} ventas
            </p>
          </div>
        </div>

        <span class="product-price">
          {{ product.price }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const products = [
  {
    name: 'Producto Premium',
    sales: 120,
    price: '$120'
  },
  {
    name: 'Producto Plus',
    sales: 98,
    price: '$95'
  },
  {
    name: 'Producto Basic',
    sales: 74,
    price: '$65'
  }
]
</script>

<style scoped>
.products-card {
  @apply bg-white dark:bg-zinc-900
  border border-zinc-200 dark:border-zinc-800
  rounded-3xl
  p-5 md:p-6
  shadow-sm
  h-full;
}

.products-header {
  @apply mb-6;
}

.products-title {
  @apply text-lg md:text-xl font-bold
  text-zinc-900 dark:text-white;
}

.products-subtitle {
  @apply text-sm text-zinc-500 dark:text-zinc-400 mt-1;
}

.products-list {
  @apply flex flex-col gap-4;
}

.product-item {
  @apply flex items-center justify-between
  gap-4
  p-3
  rounded-2xl
  border border-zinc-100 dark:border-zinc-800
  hover:bg-zinc-50 dark:hover:bg-zinc-800/40
  transition-all duration-200;
}

.product-left {
  @apply flex items-center gap-3 min-w-0;
}

.product-image {
  @apply w-12 h-12 rounded-xl
  flex items-center justify-center
  bg-indigo-100 dark:bg-indigo-500/15
  text-indigo-600 dark:text-indigo-400
  text-xl shrink-0;
}

.product-name {
  @apply font-semibold
  text-zinc-900 dark:text-white
  truncate;
}

.product-sales {
  @apply text-sm text-zinc-500 dark:text-zinc-400;
}

.product-price {
  @apply font-bold
  text-zinc-900 dark:text-white;
}
</style>