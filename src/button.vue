<template>
    <button class="gk-button" type="button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <gk-icon v-if="icon && !loading" :name="icon"></gk-icon>
        <gk-icon v-if="loading" class="loading" name="reload"></gk-icon>
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
            },
            loading: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
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
        > .gk-icon {
            order: 1;
            margin-right: .2em;
        }
        > .icon-content { order: 2; }
        &.icon-right {
            > .gk-icon {
                order: 2;
                margin-left: .2em;
                margin-right: 0;
            }
            > .icon-content { order: 1; }
        }
        .loading {
            animation: spin .87s infinite linear;
        }
    }
</style>