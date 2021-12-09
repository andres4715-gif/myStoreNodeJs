const faker = require("faker");

class ProductsServices {

  constructor() {
    this.products = [];
    this.devicesProducts = [];
    this.cartListProducts = [];
    this.dataDevicesGenerator();
    this.carsList();
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

  carsList() {
    const limit = 17;
    for (let index = 0; index < limit; index++) {
      this.cartListProducts.push({
        id: faker.datatype.uuid(),
        product: faker.vehicle.type(),
        model: faker.vehicle.model(),
        color: faker.vehicle.color(),
        manofacturer: faker.vehicle.manufacturer(),
        financeData: {
          financeId: faker.finance.mask(),
          financeIban: faker.finance.iban(),
        }
      })
    }
  }

  findCartList() {
    return this.cartListProducts;
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

  carsBrandAndColor(req, res) {
    const brand = req.params.brand;
    const color = req.params.color;
    const price = req.params.price;
    if (brand && color && price) {
      res.json({
        brand,
        color,
        price,
      });
    } else {
      res.send('without any cars information');
    }
  }

  listBigCars(req, res) {
    const {id, brand, color, model, description} = req.query;
    res.json({
      id,
      brand,
      color,
      model,
      description,
    })
  }

  create() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = ProductsServices;
