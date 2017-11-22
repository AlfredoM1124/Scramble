'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        full_name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        picture: DataTypes.STRING,
        bio: DataTypes.TEXT,
        reputation: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return User;
};