<script setup>
    import { ref, onMounted, onBeforeUnmount } from 'vue'
    import {HomeIcon,WrenchIcon,ChatBubbleLeftRightIcon,InformationCircleIcon,PhoneIcon,Bars3Icon,XMarkIcon} from '@heroicons/vue/24/outline'

    const showMenu = ref(false)
    const toggleMenu = () => {
        showMenu.value = !showMenu.value
    }

    const showMenuBar = ref(true)
    let lastScrollY = window.scrollY
    const handleScroll = () => {
    const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
            showMenuBar.value = false 
        } else {
            showMenuBar.value = true
        }
        lastScrollY = currentScrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })
    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>
    <nav :class="['bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg transition-transform duration-300',showMenuBar ? 'translate-y-0' : '-translate-y-full']">
        <div class="flex justify-between items-center">
            <h1 class="text-lg font-bold pt-1 pb-1">Mi Sitio Web</h1>
            <button @click="toggleMenu" class="md:hidden rounded hover:bg-gray-800">
                <Bars3Icon v-if="!showMenu" class="w-6 h-6" />
                <XMarkIcon v-else class="w-6 h-6" />
            </button>
            <ul class="max-md:hidden text-md flex">
                <li>
                    <router-link to="/" exact-active-class="bg-blue-600" class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-blue-600 duration-150">
                        Inicio
                    </router-link>
                </li>
                <li>
                    <router-link to="/services" exact-active-class="bg-blue-600" class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-blue-600 duration-150">
                        Servicios
                    </router-link>
                </li>
                <li>
                    <router-link to="/testimonials" exact-active-class="bg-blue-600" class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-blue-600 duration-150">
                        Testimonios
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" exact-active-class="bg-blue-600" class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-blue-600 duration-150">
                        Acerca de
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-active-class="bg-blue-600" class="pt-1 pb-1 w-30 rounded-lg flex items-center justify-center hover:bg-blue-600 duration-150">
                        Contacto
                    </router-link>
                </li>
            </ul>
        </div>

        <transition name="slide-fade">
            <ul v-show="showMenu" class="md:hidden text-md mt-3">
                <li class="mt-7">
                    <router-link to="/" exact-active-class="bg-blue-600" class="p-3 rounded-lg flex items-center mb-2 hover:bg-blue-600 duration-150">
                        <HomeIcon class="bg-gray-900 rounded-full w-9 h-9 p-2 mr-2" />Inicio
                    </router-link>
                </li>
                <li>
                    <router-link to="/services" exact-active-class="bg-blue-600" class="p-3 rounded-lg flex items-center mb-2 hover:bg-blue-600 duration-150">
                        <WrenchIcon class="bg-gray-900 rounded-full w-9 h-9 p-2 mr-2" />Servicios
                    </router-link>
                </li>
                <li>
                    <router-link to="/testimonials" exact-active-class="bg-blue-600" class="p-3 rounded-lg flex items-center mb-2 hover:bg-blue-600 duration-150">
                        <ChatBubbleLeftRightIcon class="bg-gray-900 rounded-full w-9 h-9 p-2 mr-2" />Testimonios
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" exact-active-class="bg-blue-600" class="p-3 rounded-lg flex items-center mb-2 hover:bg-blue-600 duration-150">
                        <InformationCircleIcon class="bg-gray-900 rounded-full w-9 h-9 p-2 mr-2" />Acerca de
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" exact-active-class="bg-blue-600" class="p-3 rounded-lg flex items-center mb-2 hover:bg-blue-600 duration-150">
                        <PhoneIcon class="bg-gray-900 rounded-full w-9 h-9 p-2 mr-2" />Contacto
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
