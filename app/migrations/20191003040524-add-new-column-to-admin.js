"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.addColumn("admins", "gender", {
            type: Sequelize.STRING,
            defaultValue: "u"
        });
    },

    down: (queryInterface, Sequelize) => {
        return querryInterface, removeColumn("admins", "gender");
    }
};
