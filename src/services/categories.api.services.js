const faker = require("faker");

class CategoryServices {

  constructor() {
    this.categories = [];
    this.categoriesGenerator();
  }

  categoriesGenerator() {
    const limit = 16;
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

  create() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = CategoryServices;
