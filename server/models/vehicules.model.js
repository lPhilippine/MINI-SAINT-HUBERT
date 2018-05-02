var models = require('../models');

'use strict';
module.exports = (sequelize, Datatype) => {
    var Vehicules = sequelize.define('Vehicules',{

            ve_immat:{
                type:Datatype.STRING(10),
                primaryKey: true,
                autoIncrment :false,
                allowNull: false
            },

            ve_marque:{
                type: Datatype.STRING(50),
                allowNull: false
            },

            ve_model:{
                type: Datatype.STRING(50),
                allowNull: false
            },

            ve_nbr_place:{
                type: Datatype.INTEGER,
                allaowNull: false
            },

            ve_energie: {
                type: Datatype.STRING(25),
                allowNull: false
            },
    },
    {
        classMethods: {
            associate: function (models){

                vehicules.hasMany(models.taxis,{
                    foreignKey: 've_immat'
                });

                vehicules.belongsTo(models.Taxis, {
                    foreignKey:'ve_immat'
                });
            }
        }
    });
    return Vehicules;
};