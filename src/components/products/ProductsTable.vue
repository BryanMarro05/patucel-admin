<template>
  <div
    class="bg-card border border-border rounded-3xl overflow-hidden"
  >
    <!-- TABLE HEADER -->
    <div
      class="grid grid-cols-6 gap-4 px-6 py-5 border-b border-border text-zinc-400 font-semibold"
    >
      <div>
        Producto
      </div>

      <div>
        Categoría
      </div>

      <div>
        Precio
      </div>

      <div>
        Stock
      </div>

      <div>
        Estado
      </div>

      <div class="text-right">
        Acciones
      </div>
    </div>

    <!-- ROWS -->
    <div
      v-for="product in products"
      :key="product.id"
      class="grid grid-cols-6 gap-4 px-6 py-5 border-b border-border items-center hover:bg-zinc-900 transition-all"
    >
      <!-- PRODUCT -->
      <div class="flex items-center gap-4">
        <div
          class="w-14 h-14 rounded-2xl bg-zinc-800"
        />

        <div>
          <h3 class="font-semibold">
            {{ product.name }}
          </h3>

          <p class="text-zinc-500 text-sm">
            SKU: {{ product.sku }}
          </p>
        </div>
      </div>

      <!-- CATEGORY -->
      <div>
        {{ product.category }}
      </div>

      <!-- PRICE -->
      <div class="font-semibold">
        ${{ product.price }}
      </div>

      <!-- STOCK -->
      <div>
        {{ product.stock }}
      </div>

      <!-- STATUS -->
      <div>
        <span
          class="px-3 py-1 rounded-full text-sm font-medium"
          :class="
            product.stock > 20
              ? 'bg-green-500/10 text-green-400'
              : 'bg-red-500/10 text-red-400'
          "
        >
          {{
            product.stock > 20
              ? 'Disponible'
              : 'Stock Bajo'
          }}
        </span>
      </div>

      <!-- ACTIONS -->
      <div
        class="flex items-center justify-end gap-3"
      >
        <button
          class="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-primary hover:text-black transition-all flex items-center justify-center"
        >
          <Icon
            icon="solar:pen-bold"
            class="text-xl"
          />
        </button>

        <button
          class="w-10 h-10 rounded-xl bg-zinc-900 hover:bg-red-500 hover:text-white transition-all flex items-center justify-center"
        >
          <Icon
            icon="solar:trash-bin-trash-bold"
            class="text-xl"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const products = [
  {
    id: 1,
    name: 'Papel Higiénico Premium',
    sku: 'PAT-001',
    category: 'Papel Higiénico',
    price: 24.99,
    stock: 120,
  },

  {
    id: 2,
    name: 'Servilletas Ultra',
    sku: 'PAT-002',
    category: 'Servilletas',
    price: 14.99,
    stock: 8,
  },

  {
    id: 3,
    name: 'Toallas Industriales',
    sku: 'PAT-003',
    category: 'Industrial',
    price: 49.99,
    stock: 35,
  },
]
</script>