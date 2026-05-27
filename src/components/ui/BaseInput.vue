<template>
  <div>
    <label
      class="block text-sm text-zinc-400 mb-2"
    >
      {{ label }}
    </label>

    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="w-full h-14 bg-zinc-900 border border-border rounded-2xl px-4 outline-none focus:border-primary transition-all text-white"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: String,
    default: '',
  },

  label: String,

  placeholder: String,

  type: {
    type: String,
    default: 'text',
  },
})

defineEmits(['update:modelValue'])
</script>