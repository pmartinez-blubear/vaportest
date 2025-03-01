<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};

// 
const navigation = [
  { name: 'Dashboard', href: 'dashboard',  current: true, icon:'fa-solid fa-border-all' },
  { name: 'Carros', href: 'carros',  current: false, icon:'fa-solid fa-car-side' },
  { name: 'Paginas', href: '#', children:[],  current: false, icon:'fa-solid fa-pager' },
  { name: 'Marcas', href: 'marcas',  current: false, icon:'fa-solid fa-car' },
  { name: 'Categoria', href: 'categoria', current: false, icon:'fa-solid fa-list' },
  { name: 'Links SEO', href: 'links',  current: false, icon:'fa-solid fa-link' },
  { name: 'Solicitudes', href: 'links', current: false, icon:'fa-solid fa-inbox' },
  { name: 'Agencias', href: 'links',  current: false, icon:'fa-solid fa-store' },
  { name: 'Redes Sociales', href: 'links', current: false, icon:'fa-solid fa-hashtag' },
  { name: 'Usuarios', href: 'links', children:[],  current: false, icon:'fa-solid fa-user-group' },
]

const userNavigation = [
    { name: 'Profile', href: 'profile.show',  current: true },
]

const sidebarOpen = ref(false);
const menuOptions = ref(false);

</script>

<template>
    <div>
        <Head :title="title" />
        
  
        <div>
            <TransitionRoot as="template" :show="sidebarOpen">
              <Dialog as="div" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="fixed inset-0 bg-gray-900/80" />
                </TransitionChild>
        
                <div class="fixed inset-0 flex">
                  <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
                    <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                      <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                          <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                            <span class="sr-only">Close sidebar</span>
                            <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                          </button>
                        </div>
                      </TransitionChild>
                      <!-- Sidebar component, swap this element with another sidebar if you like -->
                      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
                        <div class="flex h-16 shrink-0 items-center">
                          <Link :href="route('dashboard')">
                              <img class="h-8 w-auto" src="/images/logo.svg" alt="Your Company" />
                          </Link>
                        </div>
                        <nav class="flex flex-1 flex-col">
                          <ul role="list" class="flex flex-1 flex-col gap-y-7">
                            <li>
                              <ul role="list" class="-mx-2 space-y-1">
                                <li v-for="item in navigation" :key="item.name">
                                  <NavLink :href="route(item.href)" :active="route().current('dashboard')">
                                      {{ item.name }}
                                  </NavLink>
                                </li>
                              </ul>
                            </li>
                            <li class="mt-auto">
                              <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                                <Cog6ToothIcon class="h-6 w-6 shrink-0" aria-hidden="true" />
                                Settings
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </DialogPanel>
                  </TransitionChild>
                </div>
              </Dialog>
            </TransitionRoot>
        
            <!-- Static sidebar for desktop -->
            <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 pb-4">
                <div class="flex h-16 shrink-0 items-center px-6">
                  <img  src="/images/logo.svg" alt="Your Company"  class="w-30 invert grayscale"/>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class=" w-full">
                        <li v-for="item in navigation" :key="item.name" class="py-2">
                          <Link :href="item.href" class="flex items-center px-6" :class="[route().current() === item.name.toLowerCase() ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                            <font-awesome-icon :icon="item.icon" />
                            {{ item.name }}
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
        
            <div class="lg:pl-72">
              <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
                <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
                  <span class="sr-only">Open sidebar</span>
                  <span>O</span>
                </button>
        
                <!-- Separator -->
                <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
        
                <div class="flex flex-1 justify-end gap-x-4 self-stretch lg:gap-x-6">
                  <div class="flex items-center gap-x-4 lg:gap-x-6">        
                    <!-- Profile dropdown -->
                    <Menu as="div" class="relative">
                      <MenuButton class="-m-1.5 flex items-center p-1.5">
                        <span class="sr-only">Open user menu</span>
                        <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                        <span class="hidden lg:flex lg:items-center">
                          <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true"> {{ $page.props.auth.user.name }}</span>
                          <ChevronDownIcon class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </MenuButton>
                        <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                            <MenuItem v-for="item in userNavigation" :key="item.name">
                            <DropdownLink :href="route(item.href)">
                                Profile
                            </DropdownLink>
                            </MenuItem>
                            <MenuItems>
                            <form @submit.prevent="logout">
                                <DropdownLink as="button">
                                    Log Out
                                </DropdownLink>
                            </form>
                            </MenuItems>
                        </MenuItems>
                    </Menu>
                  </div>
                </div>
              </div>
              <main class="py-10">
                <div class="px-4 sm:px-6 lg:px-8">
                    <slot />
                </div>
              </main>
            </div>
          </div>
    </div>
</template>
