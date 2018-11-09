<template>
    <div class="gk-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .gk-button-group {
        display: inline-flex;
        vertical-align: middle;
        .gk-button {
            border-radius: 0;
            border-right: 1px var(--hover-color) solid;
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-right: none;
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>