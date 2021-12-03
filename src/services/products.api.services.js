const faker = require("faker");

class ProductsServices {

  constructor() {
    this.products = [];
    this.dataGenerator();
  }

  dataGenerator() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        dataTypeNumber: faker.datatype.number(),
        productName: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create() {

  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsServices;
