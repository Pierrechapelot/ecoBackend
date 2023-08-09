var express = require("express");
var router = express.Router();
const faker = require('faker')

const generateFakeProducts = (count = 10) => {
    const products = [];
    for (let i = 0; i < count; i++) {
        products.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.commerce.productDescription(),
            imageUrl: faker.image.imageUrl()
        });
    }
    return products;
};

router.get('/', (req, res) => {
    const products = generateFakeProducts();
    res.json(products);
});


module.exports = router;
