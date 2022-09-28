<template>
    <router-link :to="{name: 'product'}" class="product-card">
        <div class="product-card__wrapper">
            <div class="product-card__image">
                <img :src="product.image" alt="">
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
        }
    }
</script>