<template>
    <button class="gk-button" type="button">确定</button>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .gk-button {
        height: var(--button-height);
        padding: 0 12px;
        font-size: var(--font-size);
        line-height: var(--line-height);
        border: none;
        border-radius: var(--border-radius);
        color: var(--color-white);
        background: var(--color);
        cursor: pointer;
        &:hover {
            background: var(--hover-color);
        }
        &:active {
            background: var(--active-color);
        }
        &:focus {
            outline: none;
        }
    }

</style>