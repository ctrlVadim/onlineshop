<template>
    <div>
        <Header :go-back-route-name="'home'" :title="'Catalog'"/>
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
    import Header from "@/components/layouts/Header";

    export default {
        name: "Catalog",
        components: {
            Header,
            ProductCard
        },
        data: () => ({
            productList: [
                new Product(1,'Sneakers Nike Air Max AP', '', '/assets/img/content/shoe_green.png', 128),
                new Product(2,'Sneakers Nike Revolution 6 NN', '', '/assets/img/content/shoe_nike.png', 140),
                new Product(3,'Sneakers Nike Varsity', '', '/assets/img/content/shoe_pink.png', 156),
                new Product(4,'Sneakers Nike Down Shifter 10', '', '/assets/img/content/shoe_red.png', 98),
                new Product(5,'Sneakers Nike Air Max 200', '', '/assets/img/content/shoe_yeezy.png', 70),
                new Product(6,'Sneakers Nike Air Zoom', '', '/assets/img/content/shoe_yellow.png', 152),
            ]
        })
    }


</script>