'use strict';
module.exports = (sequelize, DataTypes) => {
    var Post = sequelize.define('Post', {
        title: DataTypes.STRING,
        banner: DataTypes.STRING,
        author: DataTypes.INTEGER,
        description: DataTypes.TEXT,
        rating: DataTypes.INTEGER,
        comments: DataTypes.TEXT
    });
    Post.associate = function(models) {
        Post.belongsTo(models.User, { foreignKey: 'author' });
    }
    return Post;
};