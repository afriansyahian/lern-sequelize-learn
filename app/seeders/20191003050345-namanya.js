"use strict";

module.exports = {
    up: (queryInterface, Sequalize) => {
        return queryInterface.bulkInsert(
            "admins",
            [
                {
                    name: "jhon",
                    email: "demo@demo.com",
                    password: "123",
                   
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],
            {}
        );
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert("admin", null, {});
    }
};
