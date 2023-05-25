<script setup>
    import { CheckCircleIcon } from '@heroicons/vue/20/solid';
    import { defineProps, computed, toRefs } from 'vue';

    const props = defineProps({
        width:String,
        type:{
            String,
            default:'button'
        },
        icon:{
            String,
            default:''
        },
        bgColor:{
            String,
            default:'bg-blue-800 hover:bg-blue-900'
        },
        textColor:{
            String,
            default:'text-white'
        },
        fontSize:{
            String,
            default:'text-base'
        },
        padding:{
            String,
            default:'px-3.5 py-2.5'
        },
        disabled:{
            Boolean, 
            default:false
        }
    });


    const { type, width, padding, disabled, bgColor, textColor, fontSize, icon } = toRefs(props);


    const styles = computed(()=> `${width.value} ${padding.value} ${bgColor.value} ${textColor.value} ${fontSize.value} ${disabled.value ? 'pointer-events-none' :''}`)
</script>
<template>
    <button 
        :type="type" 
        :class="styles"
        class="
        inline-flex items-center justify-center gap-x-2 
        rounded-md 
        font-semibold 
        shadow-sm 
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <font-awesome-icon :icon="icon" v-if="icon" class="mr-2"/>
      <slot></slot>
    </button>
  </template>
  
