<template>
  <AdminLayout>
    <div>
      <!-- HEADER -->
      <div
        class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8"
      >
        <div>
          <h1 class="text-4xl font-bold">
            Productos
          </h1>

          <p class="text-zinc-400 mt-2">
            Gestiona todos los productos de Patucel.
          </p>
        </div>

        <button
          @click="showModal = true"
          class="bg-primary text-black px-5 py-3 rounded-2xl font-semibold hover:scale-105 transition-all"
        >
          Nuevo Producto
        </button>
      </div>

      <!-- FILTERS -->
      <div
        class="bg-card border border-border rounded-3xl p-5 mb-6"
      >
        <div
          class="flex flex-col lg:flex-row gap-4"
        >
          <!-- SEARCH -->
          <div
            class="flex-1 bg-zinc-900 border border-border rounded-2xl px-4 h-14 flex items-center gap-3"
          >
            <Icon
              icon="solar:magnifer-bold"
              class="text-zinc-500 text-xl"
            />

            <input
              type="text"
              placeholder="Buscar producto..."
              class="bg-transparent outline-none flex-1"
            />
          </div>

          <!-- FILTER -->
          <select
            class="bg-zinc-900 border border-border rounded-2xl px-4 h-14"
          >
            <option>
              Todas las categorías
            </option>

            <option>
              Papel Higiénico
            </option>

            <option>
              Servilletas
            </option>
          </select>
        </div>
      </div>

      <!-- TABLE -->
      <ProductsTable />
    </div>
  </AdminLayout>
  <ProductModal
  :show="showModal"
  @close="showModal = false"
/>
</template>

<script setup>
import { Icon } from '@iconify/vue'

import AdminLayout from '../../components/layout/AdminLayout.vue'

import ProductsTable from '../../components/products/ProductsTable.vue'

import { ref } from 'vue'

import ProductModal from '../../components/products/ProductModal.vue'

const showModal = ref(false)
</script>