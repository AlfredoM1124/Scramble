'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('User', {
        full_name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        picture: DataTypes.STRING,
        bio: DataTypes.TEXT,
        reputation: DataTypes.INTEGER,
        password: DataTypes.TEXT
    });
    User.associate = function(models) {
        User.hasMany(models.Post, { foreignKey: 'author' });
    }
    return User;
};