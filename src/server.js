'use strict';

const express = require('express');
const app = express();


const notFoundHandler = require('./erorr-handlers/404');
const errHandler = require('./erorr-handlers/500');
const validatorMiddleware = require('./middleware/validator');
const loggerMiddleware = require('./middleware/logger');

const foodRouter = require('./routes/food')
const clothesRouter = require('./routes/clothes')

app.use(loggerMiddleware); 

app.use(foodRouter)
app.use(clothesRouter)

app.get('/', (req, res) => {
  res.status(200).send('Hello this is home root');
});

app.get('/person', validatorMiddleware, (req, res) => {
  res.send(`Hello , ${req.validator}`)
});

app.get('/bad', (req, res, next) => {
  next('error /bad');
});

app.use('*', notFoundHandler); 
app.use(errHandler);

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}

module.exports = {
  server: app,
  start: start
};

