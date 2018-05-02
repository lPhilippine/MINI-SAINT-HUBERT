var models = require('../models');

'use strict';
module.exports = (sequelize, DataTypes) => {
    var Client = sequelize.define('Client', {

        // customer id
        cl_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        // customer name
        cl_nom: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        // customer firstname
        cl_prenom: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        // customer mobile number
        cl_portable: {
            type: DataTypes.STRING(12),
            allowNull: false
        },
        // customer mail address
        cl_mail: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        // customer password
        cl_mdp: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
    }, {
     
    classMethods: {
        associate: function (models) {
            
           /*
             *   ALTER TABLE USER ADD CONSTRAINT FK_Client_cl_od FOREIGN KEY (cl_id) REFERENCES Courses(cl_id);
             */
            Client.belongsTo(models.Courses, {
                foreignKey: 'cl_id'
            });
        }
    }
});

return Client;
};