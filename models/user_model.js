module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("users", {
        full_name: {
            type: DataTypes.STRING,
            alloNull: false,
            validate: {
                len: [1]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        password_hash: DataTypes.STRING,
    })
    return User;
};