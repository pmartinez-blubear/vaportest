<script setup>
    import { defineProps, computed, toRefs } from 'vue';

    const props = defineProps({
        bgColor:{
            String,
            default:'bg-gray-50'
        },
        txtColor:{
            String,
            default:'text-gray-600'
        }
    });

    const { bgColor, txtColor } = toRefs(props);

    const styles = computed(()=> `${bgColor.value} ${txtColor.value}`);

    const emit = defineEmits(['delete']);

</script>

<template>
    <span :class="styles" class="inline-flex items-center gap-x-1.5 rounded-md px-3 py-1 text-sm font-medium ring-1 ring-inset ring-gray-500/10">
        <slot></slot>
        <button type="button" class="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20" @click="emit('delete')">
          <span class="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-gray-600/50 group-hover:stroke-gray-600/75">
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span class="absolute -inset-1" />
        </button>
      </span>
</template>