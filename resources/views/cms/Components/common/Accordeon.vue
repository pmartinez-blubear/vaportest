<script setup>
  import { ref, toRefs, onMounted, computed } from 'vue';

  const props = defineProps({
    title: { 
        type: String, 
        required: true 
    },
  });

  const { title } = toRefs(props);
  const accordeon = ref(null);
  const showPanel = ref(true);
  const heightAccordeon = ref(null);

  onMounted(() => {
    heightAccordeon.value = accordeon.value.clientHeight;
  });

  const heightEle = computed(() => `${heightAccordeon.value}px`)

  const togglePanel = () => {
    showPanel.value = !showPanel.value;
  }
</script>
<template>
    <section class="w-full container mb-4">
        <button
            @click.prevent="togglePanel"
        class="p-4 w-full font-semibold flex flex-row items-center justify-between bg-blue-200 shadow-sm">
            {{ title }}
            <font-awesome-icon icon="fa-solid fa-chevron-down" class="transition-all duration-500" :class="showPanel ? 'rotate-180' : 'rotate-0'"/>
        </button>
        <div class="px-4 w-full overflow-hidden transition-all duration-500" :style="{'height' : showPanel ? heightEle : '0px' }">
            <div
                ref="accordeon"
                class="w-full py-6"
                >
                <slot></slot>
            </div>
        </div>
        
    </section>
</template>