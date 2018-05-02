var models = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
    var Secteur = sequelize.define('Secteur', {

        // se_id -> Primary Key
        se_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // tarifs libelle
        se_libelle: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
    }, 
        {
            classMethods: {
                associate: function (models) {

                    Secteur.belongsTo(models.Taxis, {
						foreignKey: 'se_id'
                    });
                    
                    Secteur.belongsTo(models.Courses, {
						foreignKey: 'se_id'
					});

                }
            }
        });
return Secteur;
};