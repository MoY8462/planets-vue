<template>
    <div class="grid grid-cols-3 gap-6 px-12 h-40 text-white">
        <section class="border-2 border-purple rounded-lg p-4 flex flex-col gap-3">
            <h3 class="text-lg font-semibold">Atmósfera</h3>
            <p>{{ data.composicionAtmosferica }}</p>
        </section>
        <section class="border-2 border-purple rounded-lg p-4 flex flex-col gap-3">
            <h3 class="text-lg font-semibold">Lunas</h3>
            <p>{{ data.lunas }}</p>
        </section>
        <section class="border-2 border-purple rounded-lg p-4 flex flex-col gap-3">
            <h3 class="text-lg font-semibold">Superficie</h3>
            <p>{{ data.caracteristicasSuperficiales }}</p>
        </section>
    </div>
</template>

<script setup>
defineProps({
    data:Object
})
</script>