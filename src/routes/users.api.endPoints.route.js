const UserServices = require('./../services/users.api.services');
const service = new UserServices();

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const userList = await service.userList();
  res.json(userList)
})

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const user = await service.findOneUser(id);
  res.json(user)
})

router.get('/api/users', async (req, res) => {
  const apiLinkUsers = await service.apiLinkUsers(req, res);
  res.json(apiLinkUsers);
})

router.get('/api/usuarios/:firstName/:lastName/:id/', async (req, res) => {
  const userListBasicInformation = await service.userlistBasicInformation(req, res);
  res.json(userListBasicInformation);
})

router.post('/', async (req, res) => {
  const body = req.body;
  const newUser = await service.createNewUser(body);
  res.status(201).json({
    message: 'created',
    data: newUser
  })
})

router.patch('/:id', async (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const users = await service.updateUser(id, body);
  res.json(users);

})

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  const rta = await service.deleteUser(id);
  res.json(rta);
})

module.exports = router;
