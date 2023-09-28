<template>
    <button
        class="py-2 px-6 border-2 border-purple rounded
                bg-inherit hover:bg-purple transition-all"
        v-on:click="$emit('onClick')"
        >
        <slot>
            Click Me
        </slot>
    </button>
</template>