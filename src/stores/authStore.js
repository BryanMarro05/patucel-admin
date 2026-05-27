import { defineStore } from 'pinia'

export const useAuthStore = defineStore(
  'auth',
  {
    state: () => ({
      user: null,
      token: null,
    }),

    getters: {
      authenticated: (state) => !!state.token,

      isAdmin: (state) =>
        state.user?.role === 'admin',

      isSeller: (state) =>
        state.user?.role === 'seller',

      isTechnician: (state) =>
        state.user?.role === 'technician',
    },

    actions: {
      login(data) {
        this.user = data.user
        this.token = data.token
      },

      logout() {
        this.user = null
        this.token = null
      },
    },

    persist: true,
  }
)