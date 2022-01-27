const faker = require("faker");

class CategoryServices {

  constructor() {
    this.categories = [];
    this.categoriesGenerator();
  }

  async categoriesGenerator() {
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

  async categorieList() {
    return this.categories;
  }

  async findOneCategory(id) {
    return this.categories.find(item => item.id === id);
  }

  async categoriesApiList(req, res) {
    const category = req.params.categoryId;
    const product = req.params.productId;
    const serial = req.params.serialId;
    res.json({
      category,
      product,
      serial,
    });
  }

  async createNewCategorie(body) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  async updateCategory(id, changes) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("Category not found");
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...changes
    }
    return this.categories[index];
  }

  async deleteCategory(id) {
    const index = this.categories.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("Category not found with id");
    } else {
      this.categories.splice(index, 1);
      return {status: "deleted", id};
    }
  }
}

module.exports = CategoryServices;
