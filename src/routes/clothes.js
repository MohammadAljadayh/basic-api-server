'use strict';

const express = require('express');

const { Clothes } = require('../models/index');

const clothesRouter = express.Router();

// RESTful Route Delectation 
clothesRouter.post('/clothes', createClothes);
clothesRouter.get('/clothes', getAllClothes);
clothesRouter.get('/clothes/:id', getClothes);
clothesRouter.put('/clothes/:id', updateClothes);
clothesRouter.delete('/clothes/:id', deleteClothes);


async function createClothes(req, res) {
    let obj = req.body;
    let newClothes = await Clothes.create(obj);
    res.status(201).json(newClothes);
}

async function getAllClothes(req, res) {
    let allClothes = await Clothes.findAll();
    res.status(200).json(allClothes);
}

async function getClothes(req, res) {
    const id = parseInt(req.params.id);
    let findClothes = await Clothes.findOne({ where: { id: id } });
    res.status(200).json(findClothes);
}

async function updateClothes(req, res) {
    const id = parseInt(req.params.id);
    let obj = req.body;
    let selectClothes = await Clothes.findOne({ where: { id } });
    let updateClothes = await selectClothes.update(obj);
    res.status(200).json(updateClothes);
}

async function deleteClothes(req, res) {
    const id = parseInt(req.params.id);
    let deleteClothes = await Clothes.destroy({ where: { id } });
    res.status(204).json(deleteClothes);
}


module.exports = clothesRouter;


