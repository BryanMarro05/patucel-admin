<template>
  <div
    class="min-h-screen bg-dark flex items-center justify-center p-6"
  >
    <div
      class="w-full max-w-md bg-card border border-border rounded-[32px] p-8 shadow-2xl"
    >
      <!-- LOGO -->
      <div class="text-center mb-10">
        <div
          class="w-24 h-24 rounded-3xl bg-primary mx-auto flex items-center justify-center mb-5 shadow-lg"
        >
          <Icon
            icon="solar:shop-bold"
            class="text-black text-5xl"
          />
        </div>

        <h1 class="text-5xl font-black tracking-tight">
          Patucel
        </h1>

        <p class="text-zinc-400 mt-3 text-lg">
          Panel administrativo
        </p>
      </div>

      <!-- FORM -->
      <form
        class="space-y-5"
        @submit.prevent="submit"
      >
        <!-- EMAIL -->
        <BaseInput
          v-model="form.email"
          label="Correo"
          placeholder="correo@patucel.com"
        />

        <!-- PASSWORD -->
        <BaseInput
          v-model="form.password"
          type="password"
          label="Contraseña"
          placeholder="••••••••"
        />

        <!-- ROLE -->
        <div>
          <label
            class="block text-sm text-zinc-400 mb-2"
          >
            Rol demo
          </label>

          <select
            v-model="form.role"
            class="w-full h-14 bg-zinc-900 border border-border rounded-2xl px-4 outline-none focus:border-primary transition-all"
          >
            <option value="admin">
              Administrador
            </option>

            <option value="seller">
              Vendedor
            </option>

            <option value="technician">
              Técnico
            </option>
          </select>
        </div>

        <!-- LOGIN BUTTON -->
        <button
          type="submit"
          class="w-full h-14 rounded-2xl bg-primary text-black font-black text-lg hover:scale-[1.02] transition-all duration-300"
        >
          Iniciar sesión
        </button>
      </form>

      
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { useRouter } from 'vue-router'

import { toast } from 'vue-sonner'

import { Icon } from '@iconify/vue'

import BaseInput from '../../components/ui/BaseInput.vue'

import { useAuthStore } from '../../stores/authStore.js'

const router = useRouter()

const auth = useAuthStore()

const form = reactive({
  email: '',
  password: '',
  role: 'admin',
})

const demoUsers = {
  admin: {
    email: 'admin@patucel.com',
    password: '123456',
    name: 'Administrador General',
    role: 'admin',
  },

  seller: {
    email: 'seller@patucel.com',
    password: '123456',
    name: 'Vendedor Principal',
    role: 'seller',
  },

  technician: {
    email: 'tech@patucel.com',
    password: '123456',
    name: 'Técnico Patucel',
    role: 'technician',
  },
}

const submit = () => {
  const selectedUser = demoUsers[form.role]

  // VALIDACIÓN
  if (
    form.email !== selectedUser.email ||
    form.password !== selectedUser.password
  ) {
    toast.error('Credenciales incorrectas')

    return
  }

  // LOGIN
  auth.login({
    token: 'fake-jwt-token-demo',

    user: {
      name: selectedUser.name,
      email: selectedUser.email,
      role: selectedUser.role,
    },
  })

  toast.success(`Bienvenido ${selectedUser.name}`)

  router.push('/dashboard')
}
</script>