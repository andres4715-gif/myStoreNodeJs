const express = require('express');
const routerApi = require('./src/routes');

const app = express();
const port = 3000;

app.use(express.json());

routerApi(app);

app.listen(port, () => {
  console.log(`Running on Mi port: ${port}`);
});
