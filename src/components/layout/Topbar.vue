<template>
  <header
    class="h-[80px] border-b border-border bg-card px-8 flex items-center justify-between"
  >
    <!-- SEARCH -->
    <div
      class="bg-zinc-900 border border-border rounded-2xl px-4 h-12 w-[350px] flex items-center gap-3"
    >
      <Icon
        icon="solar:magnifer-bold"
        class="text-zinc-500 text-xl"
      />

      <input
        type="text"
        placeholder="Buscar..."
        class="bg-transparent outline-none flex-1 text-white"
      />
    </div>

    <!-- ACTIONS -->
    <div class="flex items-center gap-4">
      <button
        class="w-12 h-12 rounded-2xl bg-zinc-900 border border-border flex items-center justify-center hover:bg-primary hover:text-black transition-all"
      >
        <Icon
          icon="solar:bell-bold"
          class="text-2xl"
        />
      </button>

      <button
  @click="logout"
  class="px-5 h-12 rounded-2xl bg-primary text-black font-bold hover:scale-105 transition-all"
>
  Salir
</button>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '../../stores/authStore'

const router = useRouter()

const auth = useAuthStore()

const logout = () => {
  auth.logout()

  router.push('/login')
}
</script>