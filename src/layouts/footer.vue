<script setup>
    import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-vue-next'
</script>

<template>
    <footer class="bg-gray-900 text-white py-6">
        <div class="container mx-auto text-center">
            <h2 class="text-2xl font-bold mb-4">Mi Sitio Web</h2>
            <div class="flex justify-center space-x-6 mb-5">
                <Facebook class="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                <Instagram class="w-6 h-6 hover:text-pink-500 cursor-pointer" />
                <Youtube class="w-6 h-6 hover:text-red-600 cursor-pointer" />
                <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
            </div>
        </div>
        <div class="container mx-auto text-center mt-4">
            <p class="text-sm">© 2025 Miguel Roque. Todos los derechos reservados.</p>
            <p class="text-xs mt-2">
                Desarrollado por 
                <a href="https://tuempresa.com" class="text-gray-400 hover:text-white">Miguel Roque</a>
            </p>
        </div>
    </footer>
</template>
