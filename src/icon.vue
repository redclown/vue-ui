<template>
    <svg class="gk-icon" aria-hidden="true">
        <use :xlink:href=`#icon-${name}`></use>
    </svg>
</template>

<script>
    export default {
        props: {
            name: {}
        }
    }
</script>

<style lang="scss">
    .gk-icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>