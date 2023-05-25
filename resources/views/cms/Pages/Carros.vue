<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import { toRefs, ref } from "vue";
import TitlePage from '@/Components/common/TitlePage.vue'
import Input from "@/Components/forms/Input.vue";
import Checkbox from "@/Components/forms/Checkbox.vue";
import Label from "@/Components/forms/Label.vue";
import PrimaryButton from '@/Components/common/PrimaryButton.vue';
import Badge from "@/Components/common/Badge.vue";
import Select from "@/Components/forms/Select.vue";
import Toggle from "@/Components/Forms/Toggle.vue";
import Accordeon  from "@/Components/common/Accordeon.vue"
import Image from "@/Components/forms/Image.vue";

const props = defineProps({ cars: Object });

const { cars } = toRefs(props);

console.log(cars.value);


const email = ref('');
const air = ref('');

const inputEvent = () =>{

}

// badge
const deleteBadge = () =>{
    console.log('delete Badge');
}

// select
const people = [
        { id: '', name: '-- Selecciona una persona --' },
        { id: 1, name: 'Wade Cooper' },
        { id: 2, name: 'Arlene Mccoy' },
        { id: 3, name: 'Devon Webb' },
        { id: 4, name: 'Tom Cook' },
        { id: 5, name: 'Tanya Fox' },
        { id: 6, name: 'Hellen Schmidt' },
        { id: 7, name: 'Caroline Schultz' },
        { id: 8, name: 'Mason Heaney' },
        { id: 9, name: 'Claudie Smitham' },
        { id: 10, name: 'Emil Schaefer' },
    ];

const peopleSelected = ref(null);

const selectChange = (e) =>{
    console.log('selectChange');
    peopleSelected.value = e;
}

//image
const changeImage = (e) =>{
    console.log(e);
}

// button
const clickButton = () =>{
    console.log(peopleSelected);
}
</script>

<template>
    
    <AppLayout title="Carros">
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="sm:flex sm:items-center">
                <div class="sm:flex-auto">
                    <TitlePage>Carros</TitlePage>
                    <p class="mt-2 text-sm text-gray-700">Listado de autos</p>
                </div>
                <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        class="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add user
                    </button>
                </div>
            </div>
            <div class="mt-8 flow-root">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div
                        class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
                    >
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        &nbsp;
                                    </th>
                                    <th
                                        scope="col"
                                        class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                    >
                                        Nombre
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                       Año
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Kilometraje
                                    </th>
                                    <th
                                        scope="col"
                                        class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                    >
                                        Precio
                                    </th>
                                    <th
                                        scope="col"
                                        class="relative py-3.5 pl-3 pr-4 sm:pr-0"
                                    >
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                <tr
                                    v-for="car in cars"
                                    :key="car.id"
                                >
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0 w-[180px]"
                                    >
                                        <div class="w-full flex">
                                            <img src="/images/car.jpg" class="w-[180px]" />
                                        </div>
                                        
                                    </td>
                                    <td
                                        class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                                    >
                                        {{car.name}}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                    >
                                        {{ car.year }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                    >
                                        {{ car.transmission }}
                                    </td>
                                    <td
                                        class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
                                    >
                                    {{ car.price }}
                                    </td>
                                    <td
                                        class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"
                                    >
                                        <a
                                            href="#"
                                            class="text-indigo-600 hover:text-indigo-900"
                                            >Edit<span class="sr-only"
                                                >, asd</span
                                            ></a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <Accordeon title="Banner Principal">
            <div class="grid grid-cols-1 mb-6">
                <Image :width="300" :height="250" url="" @imageChange="changeImage"/>
            </div>
            <div class="grid grid-cols-1">
                <Select label="Usuarios" @selected="selectChange" :options="people"/>
            </div>
            <div class="grid grid-cols-1 my-6">
                <Label>Aire acondicionado</Label>
                <div class="flex">
                    <Checkbox label="SI" v-model:input="air" value="SI" class="mr-6"/> 
                    <Checkbox label="NO" v-model:input="air" value="NO"/> 
                </div>
            </div>
            <div class="grid grid-cols-1 my-6">
                <Label>Oculto/Activo</Label>
                <Toggle/>
            </div>
        </Accordeon>
        <Accordeon title="Marcas">
            <div class="grid grid-cols-1">
                <Input 
                    label="Codigo U."
                    @input="inputEvent"
                    v-model:input="email"
                    placeholder="user@example.com" 
                    :disabled="false"
                    error=""
                />
            </div>
            <div class="grid grid-cols-1 my-6">
                <Input 
                    label="Precios WOW"
                    type="date"
                    @input="inputEvent"
                    v-model:input="email"
                    placeholder="user@example.com" 
                    labelColor="text-brown-500"
                    :disabled="false"
                    error=""
                />
                <div class="flex justify-start mt-2">
                    <Badge @delete="deleteBadge">Fortuner</Badge>
                </div>
            </div>
        </Accordeon>
        
        <div class="flex my-6 gap-6">
            <PrimaryButton  icon="fa-solid fa-xmark-circle" width="max-w-[200px]" bg-color="bg-gray-400 hover:bg-gray-500">Cancelar</PrimaryButton>
            <PrimaryButton  icon="fa-solid fa-floppy-disk" width="max-w-[200px]" @click="clickButton">Guardar</PrimaryButton>
        </div>
    </AppLayout>
</template>
