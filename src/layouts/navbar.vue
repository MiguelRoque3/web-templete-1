<script setup>
    import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
    import { useRoute } from 'vue-router'
    import {HomeIcon,WrenchIcon,ChatBubbleLeftRightIcon,InformationCircleIcon,PhoneIcon,Bars3Icon,XMarkIcon} from '@heroicons/vue/24/outline'

    const showMenu = ref(false)
    const toggleMenu = () => {
        showMenu.value = !showMenu.value
    }

    const closeMenu = () => {
    showMenu.value = false
    }


    const showMenuBar = ref(true)
    let lastScrollY = window.scrollY
    const handleScroll = () => {
        const currentScrollY = window.scrollY
        showMenuBar.value = !(currentScrollY > lastScrollY && currentScrollY > 50)
        lastScrollY = currentScrollY
    }
    onMounted(() => window.addEventListener('scroll', handleScroll))
    onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

    const route = useRoute()
    const isHome = computed(() => route.path === '/' && !route.hash)
    const isNosotros = computed(() => route.hash === '#nosotros')
    const isServices = computed(() => route.hash === '#servicios')
    const isTestimonials = computed(() => route.path === '/testimonios')
</script>

<template>
    <nav :class="['bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-300', showMenuBar ? 'translate-y-0' : '-translate-y-full']">
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <img src="../assets/logo.png" alt="logo" class="h-10 w-10 inline-block mr-2">
                <h1 class="text-lg font-bold pt-1 pb-1 text-center">Mi Sitio Web</h1>
            </div>
            <button @click="toggleMenu" class="md:hidden rounded hover:bg-gray-800">
                <Bars3Icon v-if="!showMenu" class="w-6 h-6" />
                <XMarkIcon v-else class="w-6 h-6" />
            </button>

            <ul class="max-md:hidden text-md flex">
                <li>
                    <router-link
                        to="/"
                        class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center px-4 transition-colors"
                        :class="isHome ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900'"
                    >Inicio</router-link>
                </li>
                <li>
                    <router-link
                        to="/#nosotros"
                        class="ml-1 pt-1 pb-1 w-30 rounded-lg flex items-center justify-center px-4 transition-colors"
                        :class="isNosotros ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900'"
                    >Acerca de</router-link>
                </li>
                <li>
                    <router-link 
                        to="/#servicios"
                        class="ml-1 pt-1 pb-1 w-30 rounded-lg flex items-center justify-center px-4 transition-colors"
                        :class="isServices ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900'" 
                        >Servicios
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/#testimonios" 
                        class="ml-1 pt-1 pb-1 w-30 rounded-lg flex items-center justify-center px-4 transition-colors"
                        :class="isTestimonials ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900'">
                        Testimonios
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-active-class="bg-white text-gray-900" class="ml-1 pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-white hover:text-gray-900 duration-150">Contacto</router-link>
                </li>
            </ul>
        </div>

        <transition name="slide-fade">
            <ul v-show="showMenu" class="md:hidden text-md mt-3">
                <li class="mt-7">
                    <router-link
                        to="/"
                        :class="[isHome ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900', 'p-3 rounded-lg flex items-center mb-2 duration-150']">
                        <HomeIcon class="bg-gray-900 text-white rounded-full w-9 h-9 p-2 mr-2" />
                        Inicio
                    </router-link>
                </li>
                <li>
                    <router-link
                        to="/#nosotros"
                        :class="[isNosotros ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900', 'p-3 rounded-lg flex items-center mb-2 duration-150']">
                        <InformationCircleIcon class="bg-gray-900 text-white rounded-full w-9 h-9 p-2 mr-2" />
                        Acerca de
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/#servicios" 
                        :class="[isServices ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900', 'p-3 rounded-lg flex items-center mb-2 duration-150']">
                        <WrenchIcon class="bg-gray-900 text-white rounded-full w-9 h-9 p-2 mr-2" />
                        Servicios
                    </router-link>
                </li>
                <li>
                    <router-link 
                        to="/#testimonios" 
                        :class="[isTestimonials ? 'bg-white text-gray-900' : 'hover:bg-white hover:text-gray-900', 'p-3 rounded-lg flex items-center mb-2 duration-150']">
                        <ChatBubbleLeftRightIcon class="bg-gray-900 text-white rounded-full w-9 h-9 p-2 mr-2" />
                        Testimonios
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-active-class="bg-white text-gray-900" class="p-3 rounded-lg flex items-center mb-2 hover:bg-white hover:text-gray-900 duration-150">
                        <PhoneIcon class="bg-gray-900 text-white rounded-full w-9 h-9 p-2 mr-2" />
                        Contacto
                    </router-link>
                </li>
            </ul>
        </transition>

    </nav>
</template>

<style scoped>
    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.1s ease;
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-10px);
        opacity: 0;
    }
</style>
