const faker = require("faker");

class ProductsServices {

  constructor() {
    this.products = [];
    this.devicesProducts = [];
    this.dataDevicesGenerator();
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
          finance: {
            accountName: faker.finance.account(),
            bic: faker.finance.bic(),
          }
        },
        country: {
          city: faker.address.city(),
          cityPrefix: faker.address.cityName(),
          countryCode: faker.address.countryCode(),
        },
        transactionDescription: {
          dataInformation: faker.finance.transactionDescription(),
          nameTitle: faker.name.suffix(),
        }
      });
    }
  }

  dataDevicesGenerator() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.devicesProducts.push({
        id: faker.datatype.uuid(),
        productName: faker.commerce.productName(),
        company: faker.company.companyName(),
        financeData: {
          financeId: faker.finance.mask(),
          financeIban: faker.finance.iban(),
        }
      })
    }
  }

  create() {

  }

  findDevicesList() {
    return this.devicesProducts;
  }

  find() {
    return this.products;
  }

  findOne(id) {
    return this.products.find(item => item.id === id);
  }

  findDevices(req, res) {
    const {brand, color, price} = req.query;
    if (brand && color && price) {
      res.json({
        brand,
        color,
        price,
      });
    } else {
      res.send('without devices');
    }
  }

  update() {

  }

  delete() {

  }
}

module
  .exports = ProductsServices;
