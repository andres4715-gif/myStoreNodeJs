const faker = require("faker");

class CategoryServices {

  constructor() {
    this.categories = [];
    this.categoriesGenerator();
  }

  categoriesGenerator() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.categories.push({
          id: faker.datatype.uuid(),
          currencyCode: faker.finance.currencyCode(),
          fileName: faker.system.fileName(),
          mimeType: faker.system.mimeType(),
          categorieInformation: {
            suffixes: faker.company.suffixes(),
            companyName: faker.company.companyName(),
            bs: faker.company.bs(),
          }
        }
      )
    }
  }

  categorieList() {
    return this.categories;
  }

  findOneCategory(id) {
    return this.categories.find(item => item.id === id);
  }

  categoriesApiList(req, res) {
    const category = req.params.categoryId;
    const product = req.params.productId;
    const serial = req.params.serialId;
    res.json({
      category,
      product,
      serial,
    });
  }

  createNewCategorie(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  update() {

  }

  delete() {

  }
}

module.exports = CategoryServices;
