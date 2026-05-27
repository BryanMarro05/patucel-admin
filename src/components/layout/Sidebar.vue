<template>
  <aside
    class="w-[280px] bg-card border-r border-border min-h-screen p-5 flex flex-col"
  >
    <!-- LOGO -->
    <div class="flex items-center gap-3 mb-10">
      <div
        class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center"
      >
        <Icon
          icon="solar:shop-bold"
          class="text-black text-2xl"
        />
      </div>

      <div>
        <h1 class="text-white font-bold text-xl">
          Patucel
        </h1>

        <p class="text-zinc-400 text-sm">
          Admin Panel
        </p>
      </div>
    </div>

    <!-- NAVIGATION -->
    <nav class="flex flex-col gap-2">
      <RouterLink
        v-for="item in filteredNavigation"
        :key="item.path"
        :to="item.path"
        class="group flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300"
        :class="
          route.path === item.path
            ? 'bg-primary text-black'
            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
        "
      >
        <Icon
          :icon="item.icon"
          class="text-2xl"
        />

        <span class="font-medium">
          {{ item.name }}
        </span>
      </RouterLink>
    </nav>

    <!-- USER -->
    <div
      class="mt-auto bg-zinc-900 border border-border rounded-2xl p-4"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-black font-bold"
        >
          A
        </div>

        <div>
          <h2 class="font-semibold">
            {{ auth.user.name }}
          </h2>

          <p class="text-zinc-400 text-sm capitalize">
            {{ auth.user.role }}
          </p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

import { navigation } from '../../constants/navigation'
import { useAuthStore } from '../../stores/authStore'

const auth = useAuthStore()

const route = useRoute()

const filteredNavigation = computed(() => {
  return navigation.filter((item) =>
    item.roles.includes(auth.user.role)
  )
})
</script>