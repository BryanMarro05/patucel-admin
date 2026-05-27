<template>
  <BaseModal
    :show="show"
    title="Nuevo Producto"
    @close="$emit('close')"
  >
    <form
      class="space-y-6"
      @submit.prevent="submit"
    >
      <!-- GRID -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-5"
      >
        <BaseInput
          v-model="form.name"
          label="Nombre"
          placeholder="Producto..."
        />

        <BaseInput
          v-model="form.sku"
          label="SKU"
          placeholder="PAT-001"
        />

        <BaseInput
          v-model="form.price"
          type="number"
          label="Precio"
          placeholder="0.00"
        />

        <BaseInput
          v-model="form.stock"
          type="number"
          label="Stock"
          placeholder="0"
        />
      </div>

      <!-- CATEGORY -->
      <div>
        <label
          class="block text-sm text-zinc-400 mb-2"
        >
          Categoría
        </label>

        <select
          v-model="form.category"
          class="w-full h-14 bg-zinc-900 border border-border rounded-2xl px-4 outline-none focus:border-primary"
        >
          <option value="">
            Seleccionar
          </option>

          <option>
            Papel Higiénico
          </option>

          <option>
            Servilletas
          </option>
        </select>
      </div>

      <!-- IMAGE -->
      <div>
        <label
          class="block text-sm text-zinc-400 mb-2"
        >
          Imagen
        </label>

        <div
          class="border-2 border-dashed border-border rounded-3xl h-40 flex items-center justify-center text-zinc-500"
        >
          Arrastra una imagen aquí
        </div>
      </div>

      <!-- ACTIONS -->
      <div
        class="flex justify-end gap-4 pt-4"
      >
        <button
          type="button"
          @click="$emit('close')"
          class="px-5 py-3 rounded-2xl bg-zinc-900"
        >
          Cancelar
        </button>

        <button
          type="submit"
          class="px-5 py-3 rounded-2xl bg-primary text-black font-semibold"
        >
          Guardar Producto
        </button>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { reactive } from 'vue'

import { toast } from 'vue-sonner'

import BaseModal from '../ui/BaseModal.vue'
import BaseInput from '../ui/BaseInput.vue'

defineProps({
  show: Boolean,
})

const emit = defineEmits(['close'])

const form = reactive({
  name: '',
  sku: '',
  price: '',
  stock: '',
  category: '',
})

const submit = () => {
  toast.success('Producto creado')

  console.log(form)

  emit('close')
}
</script>