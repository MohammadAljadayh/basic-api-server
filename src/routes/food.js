'use strict';

const express = require('express');

const {Food} = require('../models/index');

const foodRouter = express.Router();


// RESTful Route Delectation 
foodRouter.post('/food', createFood);
foodRouter.get('/food', getAllFood);
foodRouter.get('/food/:id', getFood);
foodRouter.put('/food/:id', updateFood);
foodRouter.delete('/food/:id', deleteFood);


async function createFood(req, res) {
  let obj = req.body;
 
  let newFood = await Food.create(obj);
  console.log("-----------------------------------------");
  console.log(obj);
  console.log("-----------------------------------------");

  res.status(201).json(newFood);
}
async function getAllFood(req, res) {
  let allFood = await Food.findAll();
  res.status(200).json(allFood);
}


async function getFood(req, res) {
  const id = parseInt(req.params.id);
  let findFood = await Food.findOne(
    { where: 
      { id: id } 
    });
  res.status(200).json(findFood);
}



async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let obj = req.body;
  let selectFood = await Food.findOne(
    { where: { id : id }
   });
  let updateFood = await selectFood.update(obj);
  res.status(200).json(updateFood);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  let deleteFood = await Food.destroy({ where: { id } });
  res.status(204).json(deleteFood);
}

module.exports = foodRouter;


