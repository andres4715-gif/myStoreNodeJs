const faker = require("faker");

class UsersServices {

  constructor() {
    this.users = [];
    this.userGenerator();
  }

  userGenerator() {
    const limit = 15;
    for (let index = 0; index < limit; index++) {
      this.users.push({
          id: faker.datatype.uuid(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          gender: faker.name.gender(),
          jobInformation: {
            jobTitle: faker.name.jobTitle(),
            jobArea: faker.name.jobArea(),
            jobType: faker.name.jobType(),
            finance: {
              financeAccount: faker.finance.account(),
              creditCardNumber: faker.finance.creditCardNumber(),
            }
          }
        }
      )
    }
  }

  userList() {
    return this.users;
  }

  findOneUser(id) {
    return this.users.find(item => item.id === id);
  }

  create() {

  }

  update() {

  }

  delete() {

  }
}

module.exports = UsersServices;
