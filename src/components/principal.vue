<template>
    <section class="mt-17 w-full h-[100vh] bg-[url('/src/assets/bg1.jpg')] bg-fixed bg-cover bg-center">
        <div class="flex flex-col items-center justify-center h-full p-1 bg-[url('/src/assets/bg.png')] bg-cover bg-center">
            <h1 class="text-5xl font-bold text-gray-900 mb-4 text-center">
                Bienvenido al mejor sitio web
            </h1>
            <p class="text-gray-400 mb-8 text-2xl text-center">
                Aquí encontrarás todo lo que necesitas.
            </p>
            <div class="flex space-x-4">
                <router-link to="/#nosotros" class="px-6 py-2 text-white bg-gray-900 rounded hover:bg-white hover:text-gray-900 transition duration-300">
                    Sobre Nosotros
                </router-link>
                <button class="px-6 py-2 text-white bg-gray-900 rounded hover:bg-white hover:text-gray-900 transition duration-300">
                    Contáctanos
                </button>
            </div>
        </div>
    </section>
</template>