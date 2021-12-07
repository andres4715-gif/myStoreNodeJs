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
        image: faker.image.imageUrl(),
        details: {
          productMaterial: faker.commerce.productMaterial(),
          productName: faker.commerce.productName(),
          productDescription: faker.commerce.productDescription(),
          price: parseInt(faker.commerce.price(), 10),
        },
        country: {
          city: faker.address.city(),
          cityPrefix: faker.address.cityName(),
          countryCode: faker.address.countryCode(),
        },
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
