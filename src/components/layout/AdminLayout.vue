<template>
  <div class="flex bg-dark min-h-screen">
    <Sidebar />

    <div class="flex-1">
      <Topbar />

      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
</script>