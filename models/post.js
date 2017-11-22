'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    banner: DataTypes.STRING,
    author: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    comments: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Post;
};