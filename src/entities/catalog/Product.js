export default class Product {

    id;
    name;
    description;
    image;
    price;
    isFavorite;

    constructor(id, name, description, image, price) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.image = image;
        this.price = price;
        this.isFavorite = Math.random() < 0.5;
    }

    getPrice() {
        return '$' + this.price.toFixed(2)
    }
}