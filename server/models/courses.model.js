var models = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
    var Courses = sequelize.define('Courses', {

        // co_id -> Primary Key
        co_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // Date courses
        co_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        // Time courses
        co_heure: {
            type: DataTypes.TIME,
            allowNull: false
        },
        // Nb place courses
        co_place_necessaire: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // From courses
        co_prise_charge: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        // Destination courses
        co_destination: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
    },
        {
            classMethods: {
                associate: function (models) {

                    Courses.hasMany(models.Clients, {
						foreignKey: 'cl_id'
                    });
                    
                    Courses.hasMany(models.Secteur, {
						foreignKey: 'se_id'
                    });
                    
                    Courses.hasMany(models.Tarifs, {
						foreignKey: 'tf_id'
                    });
                    
                    Courses.hasMany(models.Taxis, {
						foreignKey: 'ta_id'
					});
                }
            }
        });
    return Courses;
};