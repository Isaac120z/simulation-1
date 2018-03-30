require('dotenv').config()
const controller_shelfiedb = require('./controller/Controller');
const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => app.set('db', dbInstance))
    .catch(console.log);

app.post('/api/product', controller_shelfiedb.create);
app.get('/api/products', controller_shelfiedb.getAll);
app.delete('/api/product/:id', controller_shelfiedb.delete);
//app.update('/api/product/:id', controller_shelfiedb.update);

const port = process.env.PORT || 3050;
app.listen(port, () => { console.log(`Server listening on port ${port}.`); });