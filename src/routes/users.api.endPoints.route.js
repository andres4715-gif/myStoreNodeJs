const ProductsServices = require('./../services/users.api.services');

const service = new ProductsServices();

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

router.get('/api/usuarios/:user_firstName/:user_lastName/:user_id/', (req, res) => {
  const userFirstName = req.params.user_firstName;
  const userlastName = req.params.user_lastName;
  const user_userid = req.params.user_id;
  res.json({
    userfirstname: userFirstName,
    userlastname: userlastName,
    userid: user_userid,
  })
})

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
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
