'use strict';

require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');


let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const food = require('./food');
const clothes = require('./clothes')

module.exports = {
  db: sequelize,
  Food: food(sequelize, DataTypes),
  Clothes: clothes(sequelize, DataTypes),};