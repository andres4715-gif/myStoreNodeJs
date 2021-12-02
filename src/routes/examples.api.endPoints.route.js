const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const {device, color, price, status} = req.query;
  if (device && color && price && status) {
    res.json({
      device,
      color,
      price,
      status
    })
  } else {
    req.send('No device specified');
  }
})

router.get('/new-path', (req, res) => {
  res.send('Hello I am a new endpoint');
});

router.get('/api/seriales/{user}/', (req, res) => {
  let user2 = 1;
  if (req.params.user === user2) {
    return res.send(user2, 'found success!!');
  } else {
    return res.send(user2, 'not found!!');
  }
});

router.get('/api/places', (req, res) => {
  res.json({
    marcadores: [
      {
        latitude: 40.416875,
        longitude: -3.703308,
        city: 'Madrid',
        description: 'Puerta del Sol',
      },
      {
        latitude: 40.417438,
        longitude: -3.693363,
        city: 'Madrid',
        description: 'Paseo del Prado',
      },
      {
        latitude: 40.407015,
        longitude: -3.691163,
        city: 'Madrid',
        description: 'Estación de Atocha',
      },
      {
        latitude: 40.407017,
        longitude: -3.691167,
        city: 'Colombia',
        description: 'Estación de Medellin',
      },
    ],
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  });
});

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
    message: 'example deleted',
    id,
  });
});

module.exports = router;
