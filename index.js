const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is my server in express running!!');
});

app.get('/new-path', (req, res) => {
  res.send('Hello I am a new endpoint');
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

app.get('/productos', (req, res) => {
  res.json({
    cars: [
      {
        brand: 'Chevrolet',
        color: 'write',
        model: '2011',
        description: 'aveo gt',
      },
      {
        brand: 'Chevrolet',
        color: 'green',
        model: '1993',
        description: 'swith',
      },
      {
        brand: 'Renault',
        color: 'green',
        model: '2005',
        description: 'expression',
      },
      {
        brand: 'Mazda',
        color: 'gray',
        model: '2013',
        description: 'tres',
      },
    ],
  });
});

app.listen(port, () => {
  console.log('My port is running on: ', port);
});
