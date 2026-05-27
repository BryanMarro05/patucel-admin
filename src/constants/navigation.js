export const navigation = [
  {
    name: 'Dashboard',
    icon: 'solar:widget-5-bold',
    path: '/dashboard',
    roles: ['admin', 'seller'],
  },

  {
    name: 'Productos',
    icon: 'solar:box-bold',
    path: '/products',
    roles: ['admin', 'seller'],
  },

  {
    name: 'Pedidos',
    icon: 'solar:cart-large-2-bold',
    path: '/orders',
    roles: ['admin', 'seller'],
  },

  {
    name: 'Clientes',
    icon: 'solar:users-group-rounded-bold',
    path: '/customers',
    roles: ['admin'],
  },

  {
    name: 'Ventas',
    icon: 'solar:chart-bold',
    path: '/sales',
    roles: ['admin'],
  },

  {
    name: 'Servicios',
    icon: 'solar:settings-bold',
    path: '/services',
    roles: ['admin', 'technician'],
  },

  {
    name: 'Configuración',
    icon: 'solar:tuning-bold',
    path: '/settings',
    roles: ['admin'],
  },
]