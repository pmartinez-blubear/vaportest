<script setup>
    import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
    import { defineProps, toRefs, computed, defineEmits } from 'vue';
    import Label from '@/Components/forms/Label.vue';

    const props = defineProps({
        input:String,
        type: {
            String,
            default:'text'
        },
        placeholder:{
            String,
            default:''
        },
        error:{
            String,
            default:''
        },
        disabled:{
            Boolean,
            default: false
        },
        maxlength:{
            Number,
            default:100000
        },
        label:String,
        labelColor:{
            String,
            default:''
        },
        name:String
    });

    const { type , input, placeholder, disabled, maxlength, label, error, name, labelColor } = toRefs(props);

    const emit = defineEmits(['update:input', 'update']);

    const inputComputed = computed({
        get:()=>input.value,
        set:(val)=>emit('update:input', val)
    });

</script>
<template>
    <div class="w-full">
        
      <Label :for="name" :color="labelColor">{{ label }}</Label>
      <div class="relative mt-2 rounded-md shadow-sm">
        <input 
            v-model.trim="inputComputed"
            :name="name"
            :type="type" 
            :class="
                error ? 'focus:ring-red placeholder:text-red-500 ring-red-500 text-red-500' : 'focus:ring-gray-400 placeholder:text-gray-400 ring-gray-400 text-black',
                disabled ? 'bg-gray-200' : ''
            "
            class="
                block w-full 
                rounded-md border-0 
                px-3 
                ring-1 ring-inset
                focus:ring-2 focus:ring-inset 
                sm:text-sm 
                sm:leading-6" 
            :placeholder="placeholder"
            :disabled="disabled"
            :maxlength="maxlength"
        />
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3" v-if="error">
          <ExclamationCircleIcon class="h-5 w-5 text-red-500" aria-hidden="true" />
        </div>
      </div>
      <p class="mt-2 text-sm text-red-500" v-if="error">{{ error }}</p>
    </div>
  </template>
  
