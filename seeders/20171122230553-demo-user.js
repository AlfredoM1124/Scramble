'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Users', [{
            full_name: 'John Sperm',
            username: 'Jsperm',
            email: 'john@gmail.com',
            picture: '../pictures/me.jpg',
            bio: 'blablablablablablablabla',
            reputation: 1,
            password: 1234,
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Users', null, {});
    }
};