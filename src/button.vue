<template>
    <button class="gk-button" type="button" :class="{[`icon-${iconPosition}`]: true}">
        <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href=`#icon-${icon}`></use>
        </svg>
        <span class="icon-content">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator (value) {
                    return value === 'left' || value === 'right';
                }
            }
        }
    }
</script>

<style lang="scss">
    .gk-button {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        height: var(--button-height);
        padding: 0 12px;
        font-size: var(--font-size);
        line-height: var(--line-height);
        border: none;
        border-radius: var(--border-radius);
        color: var(--color-white);
        background: var(--color);
        cursor: pointer;
        &:hover { background: var(--hover-color);}
        &:active { background: var(--active-color);}
        &:focus { outline: none;}
        > .icon {
            order: 1;
            margin-right: .2em;
        }
        > .icon-content { order: 2; }
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }
            > .icon-content { order: 1; }
        }
    }

</style>