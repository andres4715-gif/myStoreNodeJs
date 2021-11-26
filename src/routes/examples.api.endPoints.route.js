const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is my server in express running!!');
});

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

module.exports = router;
