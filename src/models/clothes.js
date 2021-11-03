"use strict";

const Clothes = (sequelize, DataTypes) =>
    sequelize.define("Clothes", {
        clothesName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        color:{
            type:DataTypes.STRING,
            allowNull: false,
        },
    });

module.exports = Clothes;