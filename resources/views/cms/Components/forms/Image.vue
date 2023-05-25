<script setup>
    import { defineProps, computed, toRefs, ref, defineEmits } from 'vue';

    const props = defineProps({
        width:{
            Number,
            required:true
        },
        height:{
            Number,
            required:true
        },
        url:{
            String,
            default:''
        }
    });

    const { width, height, url } = toRefs(props);

    const widthImage = computed(()=>`${width.value}px`);
    const heightImage = computed(()=>`${height.value}px`);

    const imageURL = ref(url.value);

    const fileInput = ref(null);

    const emit = defineEmits(['imageChange']);

    const changeImage = () => {
        fileInput.value.click();
    }

    const getUpLoadedImage = (e) =>{
        const file = e.target.files[0];
        imageURL.value = URL.createObjectURL(file);
        
        emit('imageChange', file);
    }

</script>
<template>
    <div @click="changeImage" 
        class="w-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative hover:cursor-pointer hover:bg-gray-50 overflow-hidden" 
        :style="{'width' : widthImage, 'height' : heightImage}"
    >
        <div v-if="!imageURL" class="flex flex-col justiify-center items-center">
            <font-awesome-icon icon="fa-solid fa-image" class="text-gray-400 mb-2" size="xl"/>
            <h3 class="font-semibold text-blue-500 text-sm">Cargar una imagen</h3>
            <p class="text-gray-500 text-sm mb-4">o drag and drop</p>
            <p class="text-gray-400 text-xs font-semibold">Tipo: PNG, JPG, GIF - Tamaño max: 500 KB</p>
            <p class="text-gray-400 text-xs font-semibold">Size: {{ width }}px - {{ height }}px</p>
        </div>
        <div v-if="imageURL" class="w-full h-full flex items-center justify-center overflow-hidden relative">
            <img :src="imageURL" alt=""/>
            <div class="absolute w-10 h-10 rounded-full bg-[rgba(0,0,0,0.3)] top-2 right-2 flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-edit" class="text-white" size="sm"/>
            </div>
            
        </div>
        <input type="file" class="absolute top-0 left-0 invisible" ref="fileInput" @change="getUpLoadedImage"/>
    </div>
</template>