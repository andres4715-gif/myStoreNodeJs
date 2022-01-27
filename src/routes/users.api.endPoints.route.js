const UserServices = require('./../services/users.api.services');
const service = new UserServices();

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userList = service.userList();
  res.json(userList)
})

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const user = service.findOneUser(id);
  res.json(user)
})

router.get('/api/users', (req, res) => {
  const apiLinkUsers = service.apiLinkUsers(req, res);
  res.json(apiLinkUsers);
})

router.get('/api/usuarios/:firstName/:lastName/:id/', (req, res) => {
  const userListBasicInformation = service.userlistBasicInformation(req, res);
  res.json(userListBasicInformation);
})

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.createNewUser(body);
  res.status(201).json({
    message: 'created',
    data: newUser
  })
})

router.patch('/:id', (req, res) => {
  const body = req.body;
  const {id} = req.params.id;
  res.json({
    message: 'updated',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const {id} = req.params.id;
  res.json({
    message: 'user deleted',
    id,
  })
})

module.exports = router;
