<script setup>
    import { WrenchIcon, Cog6ToothIcon, BriefcaseIcon, BuildingOffice2Icon, PuzzlePieceIcon } from '@heroicons/vue/24/outline'
</script>

<template>
    <section id="servicios" class="md:w-2/3 max-md:p-5 text-white mt-20">
        <h2 class="text-3xl font-bold mb-4 text-center w-full border-b-2 border-white pb-5">
            Servicios Que Brindamos
        </h2>
        <div class="flex flex-wrap justify-center gap-5">
            <div class="md:max-w-100 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                <WrenchIcon class="h-50 w-50 text-white mb-3" />
                <h3 class="text-xl font-semibold mb-2">Servicio 1</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est, architecto repellat inventore fuga adipisci.</p>
            </div>
            <div class="md:max-w-100 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                <Cog6ToothIcon class="h-50 w-50 text-white mb-3" />
                <h3 class="text-xl font-semibold mb-2">Servicio 2</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est, architecto repellat inventore fuga adipisci.</p>
            </div>
            <div class="md:max-w-100 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                <BriefcaseIcon class="h-50 w-50 text-white mb-3" />
                <h3 class="text-xl font-semibold mb-2">Servicio 3</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est, architecto repellat inventore fuga adipisci.</p>
            </div>
            <div class="md:max-w-100 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                <BuildingOffice2Icon class="h-50 w-50 text-white mb-3" />
                <h3 class="text-xl font-semibold mb-2">Servicio 4</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est, architecto repellat inventore fuga adipisci.</p>
            </div>
            <div class="md:max-w-100 bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center">
                <PuzzlePieceIcon class="h-50 w-50 text-white mb-3" />
                <h3 class="text-xl font-semibold mb-2">Servicio 5</h3>
                <p class="text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor est, architecto repellat inventore fuga adipisci.</p>
            </div>
        </div>
    </section>
</template>