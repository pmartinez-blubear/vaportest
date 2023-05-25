
<script setup>
    import { defineProps, toRefs, computed, defineEmits } from 'vue';

    const props = defineProps({
        name:String,
        color:{
            String,
            default:"text-black"
        }
    });

    const { name, color } = toRefs(props);

</script>
<template>
    <label :for="name" class="block text-sm font-semibold" :class="color"><slot></slot></label>
</template>