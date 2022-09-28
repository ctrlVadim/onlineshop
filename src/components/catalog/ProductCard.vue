<template>
    <router-link :to="{name: 'product'}" class="product-card">
        <div class="product-card__wrapper">
            <div class="product-card__image">
                <div class="product-card__actions">
                    <div class="product-card__actions-favorite">
                        <img v-if="product.isFavorite" src="@/assets/img/icon/heart_active.svg" alt="">
                        <img v-else src="@/assets/img/icon/heart.svg" alt="">

                    </div>
                </div>
                <div class="product-card__image-container">
                    <img :src="product.image" alt="">
                </div>
            </div>
            <div class="product-card__data">
                <div class="product-card__name">
                    {{product.name}}
                </div>
                <div class="product-card__price">
                    {{product.getPrice()}}
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
    import Product from "@/entities/catalog/Product";


    export default {
        name: "ProductCard",
        props: {
            product: {
                type: Product,
                default: () => ({})
            }
        },
        data() {
            return {
                favImage: '@/assets/img/icon/heart.svg',
                favImageActive: '@/assets/img/icon/heart_active.svg'
            }
        },
    }
</script>