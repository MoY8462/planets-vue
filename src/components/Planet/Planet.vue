<template>
    <div class="grid grid-cols-3 gap-6 px-12">
        <section class="col-span-2 flex justify-center">
            <img class="h-[600px]" :src="`src/assets/planets/${planet.id}.svg`" alt="Planeta">
        </section>
        <section class="flex flex-col justify-center gap-6 text-white">
            <h1 class="font-medium text-4xl">{{ planet.nombre}}</h1>
            <p class="text-base font-medium">{{ planet.resumen }}</p>
            <label class="flex gap-2 text-base font-medium">
                <span>Source: </span>
                <a class="underline" href="#">Wikipedia</a>
                <img class="w-6 h6" src="@/assets/icons/arrow-top-right-on-square.svg" alt="">
            </label>
            <Button @onClick="value = false" :class="[!value  ? 'bg-purple': '']">
                <div class="w-full h-full flex justify-start gap-6">
                    <span>01</span>
                    <span>Características</span>
                </div>
            </Button>
            <Button @onClick="value = true" :class="[value ? 'bg-purple': '']">
                <div class="w-full h-full flex justify-start gap-6">
                    <span>02</span>
                    <span>Datos</span>
                </div>
            </Button>
        </section>
    </div>
    <Characteristics
        v-if="!value"
        :characteristics="planet.caracteristicas"
    />
    <Data
        v-else
        :data="planet.data"
    />
</template>

<script setup>
import Button from '../Button/Button.vue'
import Data from '../Description/Data.vue'
import Characteristics from '../Description/Characteristics.vue';
import { ref } from 'vue'

const value = ref(false)

defineProps({
    planet: Object
})



</script>
