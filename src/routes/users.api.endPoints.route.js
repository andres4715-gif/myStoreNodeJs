const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const {id, firstName, lastName, age} = req.query;
  if (id && firstName && lastName && age) {
    res.json({
      id,
      firstName,
      lastName,
      age
    })
  } else {
    req.send('No user specified');
  }
})

router.get('/api/users', (req, res) => {
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('without params');
  }
});

router.get('/api/usuarios/:user_firstName/:user_lastName/:user_id/', (req, res) => {
  const userFirstName = req.params.user_firstName;
  const userlastName = req.params.user_lastName;
  const user_userid = req.params.user_id;
  res.json({
    userfirstname: userFirstName,
    userlastname: userlastName,
    userid: user_userid,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'created',
    data: body
  })
})

router.patch('/:id', (req, res) => {
  const body = req.body;
  const { id } = req.params.id;
  res.json({
    message: 'updated',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params.id;
  res.json({
    message: 'user deleted',
    id,
  });
});

module.exports = router;
