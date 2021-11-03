"use strict";

const Food = (sequelize, DataTypes) =>
    sequelize.define("Food", {
        foodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });
   
module.exports = Food;