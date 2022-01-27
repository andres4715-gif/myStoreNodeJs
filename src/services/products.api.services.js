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

  async dataGenerator() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        price: parseInt(faker.commerce.price(), 10),
        dataTypeNumber: faker.datatype.number(),
        image: faker.image.imageUrl(),
        details: {
          productMaterial: faker.commerce.productMaterial(),
          productName: faker.commerce.productName(),
          productDescription: faker.commerce.productDescription(),
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

  async dataDevicesGenerator() {
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

  async carsList() {
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

  async findCartList() {
    return this.cartListProducts;
  }

  async findDevicesList() {
    return this.devicesProducts;
  }

  async find() {
    return this.products;
  }

  async findOne(id) {
    return this.products.find(item => item.id === id);
  }

  async findDevices(req, res) {
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

  async carsBrandAndColor(req, res) {
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

  async listBigCars(req, res) {
    const {id, brand, color, model, description} = req.query;
    res.json({
      id,
      brand,
      color,
      model,
      description,
    })
  }

  async createNewProduct(body) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.products.push(newProduct);
    return newProduct;
  }

  async updateProduct(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    }
    return this.products[index];
  }

  async deleteProduct(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found with id');
    } else {
      this.products.splice(index, 1);
      return {status: "deleted", id};
    }
  }
}

module.exports = ProductsServices;
