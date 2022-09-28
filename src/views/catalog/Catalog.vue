<template>
    <div>
        <div class="catalog">
            <div class="catalog__list">
                <ProductCard v-bind:="product.id" v-for="product in productList" :product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Product from "@/entities/catalog/Product";
    import ProductCard from "@/components/catalog/ProductCard";

    export default {
        name: "Catalog",
        components: {
            ProductCard
        },
        data: () => ({
            productList: [
                new Product(1,'Обувт 1', 'Описание обуви 1', '/assets/img/content/shoe_green.png', 1),
                new Product(2, 'Обувт 2', 'Описание обуви 2', '/assets/img/content/shoe_green.png', 2),
                new Product(3, 'Обувт 3', 'Описание обуви 3', '/assets/img/content/shoe_green.png', 3),
                new Product(4, 'Обувт 4', 'Описание обуви 4', '/assets/img/content/shoe_green.png', 4),
            ]
        })
    }


</script>