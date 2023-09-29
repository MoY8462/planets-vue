<template>
    <header class="planet-header">
        <section class="planet-header__title">
            The Planets
        </section>
        <section class="planet-header__items">
            <a href="#" @click="$emit('change', 'mercury')">Mercury</a>
            <a href="#" @click="$emit('change', 'venus')">Venus</a>
            <a href="#" @click="$emit('change', 'earth')">Earth</a>
            <a href="#" @click="$emit('change', 'mars')">Mars</a>
            <a href="#" @click="$emit('change', 'jupiter')">Jupiter</a>
            <a href="#" @click="$emit('change', 'saturn')">Saturn</a>
            <a href="#" @click="$emit('change', 'uranus')">Uranus</a>
            <a href="#" @click="$emit('change', 'neptune')">Neptune</a>
        </section>
    </header>
</template>