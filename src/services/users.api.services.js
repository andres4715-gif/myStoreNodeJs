const faker = require("faker");

class UsersServices {

  constructor() {
    this.users = [];
    this.userGenerator();
  }

  userGenerator() {
    const limit = 5;
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

  apiLinkUsers(req, res) {
    const {limit, offset} = req.query;
    if (limit && offset) {
      res.json({
        limit,
        offset,
      });
    } else {
      res.send('without params');
    }
  }

  userlistBasicInformation(req, res) {
    const user_firstName = req.params.firstName;
    const user_lastName = req.params.lastName;
    const user_userid = req.params.id;
    res.json({
      user_firstName,
      user_lastName,
      user_userid,
    })
  }

  createNewUser(body) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...body
    }
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('User not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...user,
      ...changes
    }
    return this.users[index];
  }

  deleteUser(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error("User not found with id");
    } else {
      this.users.splice(index, 1);
      return {status: "deleted", id};
    }
  }
}

module.exports = UsersServices;
