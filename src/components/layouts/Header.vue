<template>
    <header class="header">
        <div class="header__wrapper">
            <div class="header__row">
                <div class="header__go-back">
                    <router-link :to="{name: goBackRouteName}">
                        <img src="@/assets/img/icon/arrow_active.svg" alt="">
                    </router-link>
                </div>
                <div class="header__title">
                    {{title}}
                </div>
                <slot name="options">
                    <img src="@/assets/img/icon/dots.svg" alt="">
                </slot>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",
        props: {
            title: {
                type: String,
                default: () => ('')
            },
            goBackRouteName: {
                type: String,
                default: () => ('')
            }
        }
    }
</script>

<style scoped>

</style>