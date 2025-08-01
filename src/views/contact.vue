<script setup>
    import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-vue-next'
</script>

<template>
    <div class="mt-17 md:h-[100vh] flex items-center justify-center bg-[url('/src/assets/bg2.png')] bg-fixed bg-cover bg-center">
        <div class="bg-[url('/src/assets/bg.png')] bg-cover bg-center flex items-center justify-center w-full h-full">
            <div class="text-center md:w-3/4 bg-gray-900 p-8 md:rounded-4xl shadow-lg">
                <h1 class="text-3xl font-bold mb-4 text-white">Contáctanos</h1>
                <p class="mb-6 text-white text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non corrupti sit omnis doloremque quos autem perspiciatis enim asperiores dolor reiciendis sint reprehenderit explicabo atque aliquam distinctio ullam mollitia, ut consequuntur rem, sapiente architecto deserunt deleniti.
                </p>
                <div class="bg-gray-800 p-6 rounded-4xl shadow-md md:flex md:items-center md:justify-between">
                    <div class="md:w-1/2 md:mr-6">
                        <img src="../assets/contact.webp" alt="contacto" class="w-full h-64 object-cover rounded-lg mb-10"></img>
                        <h2 class="text-xl font-semibold text-white mb-4">Síguenos en redes sociales</h2>
                        <div class="flex justify-center space-x-6 mb-5 text-white">
                            <Facebook class="w-6 h-6 hover:text-blue-500 cursor-pointer" />
                            <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
                            <Instagram class="w-6 h-6 hover:text-pink-500 cursor-pointer" />
                            <Youtube class="w-6 h-6 hover:text-red-600 cursor-pointer" />
                            <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
                        </div>
                    </div>
                    <form class="space-y-4 md:w-1/2">
                        <input type="text" placeholder="Asunto" class="w-full p-2 border rounded bg-white" required />
                        <input type="text" placeholder="Nombre" class="w-full p-2 border rounded bg-white" required />
                        <input type="email" placeholder="Email" class="w-full p-2 border rounded bg-white" required />
                        <textarea placeholder="Mensaje" class="w-full p-2 border rounded h-32 bg-white" required></textarea>
                        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>