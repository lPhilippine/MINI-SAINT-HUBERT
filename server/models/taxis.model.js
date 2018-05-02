var models = require('../models');

'use strict';
module.exports = (sequelize, Datatype) => {
    var Taxis = sequelize.define('Taxis', {

        ta_id: {
            type: Datatype.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        ta_nom: {
            type: Datatype.STRING(50),
            allowNull: false
        },

        ta_prenom: {
            type: Datatype.STRING(50),
            allowNull: false
        },

        ta_portable: {
            type: Datatype.STRING(12),
            allowNull: false
        },

        ta_mail: {
            type: Datatype.STRING(150),
            allowNull: false
        },

        ta_mdp: {
            type: Datatype.STRING(100),
            allowNull: false
        },

        },
        {
            freezeTableName: true,
            classMethods: {
                associate: function (models) {

                    taxis.hasMany(models.tarifs, {
                        foreignKey: 'ta_id'
                    });
                    taxis.hasMany(models.Vehicules, {
                        foreignKey: 'ta_id'
                    });
                    taxis.hasMany(models.Secteur, {
                        foreignKey: 'ta_id'
                    });

                    taxis.belongTo(models.Courses, {
                        foreignKey: 'ta_id'
                    });

                    taxis.belongTo(models.Vehicules, {
                        foreignKey: 'ta_id'
                    });
                }
            }
        });
    return Taxis;
};