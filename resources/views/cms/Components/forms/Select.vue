<script setup>
    import { ref, defineProps, toRefs, defineEmits, watch, } from 'vue'
    import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
    import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid';
    import Label from './Label.vue';

    const props = defineProps({
        label:{
            String,
            default:''
        },
        options:{
            Array,
            required:true
        }
    });

    const { label, options } = toRefs(props);

    const selected = ref(options.value[0]);

    const emit = defineEmits(['selected'])

    watch(selected, (newSelected) => {
    // Do something with the updated value.
        emit('selected', newSelected);
    });
</script>

<template>
    <Listbox as="div" v-model="selected">
      <Label v-if="label">{{label}}</Label>
      <div class="relative mt-2">
        <ListboxButton class="
                relative
                w-full 
                cursor-default 
                rounded-md 
                bg-white 
                py-1.5 pl-3 pr-10 
                text-left   text-base
                shadow-sm 
                ring-1 ring-inset ring-gray-400 
                focus:outline-none focus:ring-2 focus:ring-gray-400 
                sm:text-sm 
                sm:leading-6
            "
            :class="selected.id === '' ? 'text-gray-400' : 'text-black'"
        >
          <span class="block truncate"> {{ selected.name }} </span>
          <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </span>
        </ListboxButton>
  
        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            <ListboxOption as="template" v-for="option in options" :key="option.id" :value="option" v-slot="{ active, selected }">
              <li :class="[active ? 'bg-gray-400 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate']">{{ option.name }}</span>
                <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 left-0 flex items-center pl-1.5']">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </template>
  
