<script setup>
    import { defineProps, toRefs, computed, defineEmits } from 'vue';

    const props = defineProps({
        input:String,
        label:String,
        value:String
    });

    const { label, input, value} = toRefs(props);

    const emit = defineEmits(['update:input', 'update']);

    const checkboxComputed = computed({
        get:()=>value.value,
        set:(val)=>emit('update:input', val)
    });

</script>
<template>
    <div class="relative flex items-start my-2">
        <div class="flex h-6 items-center">
            <input v-model="checkboxComputed"
                type="checkbox" 
                class="h-4 w-4 rounded border-gray-400 text-yellow-900 focus:ring-yellow-900" 
            />
        </div>
        <div class="ml-3 text-sm leading-6">
          <label for="offers" class="font-medium text-gray-900">{{ label }}</label>
        </div>
    </div>
  </template>