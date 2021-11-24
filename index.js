const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log('My port is running on: ', port);
});

app.get('/', (req, res) => {
  res.send('This is my server in express running!!');
});

app.get('/new-path', (req, res) => {
  res.send('Hello I am a new endpoint');
});

app.get('/seriales/{user}/', (req, res) => {
  let user2 = 1;
  if (req.params.user === user2) {
    return res.send(user2, 'found success!!');
  } else {
    return res.send(user2, 'not found!!');
  }
});

app.get('/places', (req, res) => {
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

app.get('/carros', (req, res) => {
  res.json([
    {
      id: 1,
      brand: 'Chevrolet',
      color: 'write',
      model: '2011',
      description: 'aveo gt',
    },
    {
      id: 2,
      brand: 'Chevrolet',
      color: 'green',
      model: '1993',
      description: 'swith',
    },
    {
      id: 3,
      brand: 'Renault',
      color: 'green',
      model: '2005',
      description: 'expression',
    },
    {
      id: 4,
      brand: 'Mazda',
      color: 'gray',
      model: '2013',
      description: 'tres',
    },
  ]);
});

app.get('/carros/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
  });
});

app.get('/carros/:marca/:color', (req, res) => {
  const marca = req.params.marca;
  const color = req.params.color;
  res.json({
    carro_marca: marca,
    carro_color: color,
  });
});

app.get('/usuarios/:user_firstName/:user_lastName/:user_id/', (req, res) => {
  const userFirstName = req.params.user_firstName;
  const userlastName = req.params.user_lastName;
  const user_userid = req.params.user_id;
  res.json({
    userfirstname: userFirstName,
    userlastname: userlastName,
    userid: user_userid,
  });
});

app.get('/categories/:categoryId/product/:productId', (req, res) => {
  const category = req.params.categoryId;
  const product = req.params.productId;
  res.json({
    categoryId: category,
    producId: product,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('without params');
  }
});

app.get('/devices', (req, res) => {
  const { brand, color, price } = req.query;
  if (brand && color && price) {
    res.json({
      brand,
      color,
      price,
    });
  } else {
    res.send('without devices');
  }
});
