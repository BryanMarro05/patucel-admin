<template>
  <div
    v-if="show"
    class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-5"
  >
    <div
      class="bg-card border border-border rounded-3xl w-full max-w-2xl p-8"
    >
      <!-- HEADER -->
      <div
        class="flex items-center justify-between mb-8"
      >
        <div>
          <h2 class="text-3xl font-bold">
            {{ title }}
          </h2>

          <p class="text-zinc-400 mt-1">
            Completa la información.
          </p>
        </div>

        <button
          @click="$emit('close')"
          class="w-12 h-12 rounded-2xl bg-zinc-900 hover:bg-red-500 transition-all"
        >
          ✕
        </button>
      </div>

      <!-- BODY -->
      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: String,
})

defineEmits(['close'])
</script>