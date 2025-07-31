<script setup>
    import Extract from '../components/extract.vue';
    import Principal from '../components/principal.vue';
    import Services from '../components/services.vue';
</script>

<template>
    <Principal />
    <div class="bg-gray-900 pt-10 pb-5 flex flex-col items-center">
        <Extract />
        <Services />
    </div>
</template>