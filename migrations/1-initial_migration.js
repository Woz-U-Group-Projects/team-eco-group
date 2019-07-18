'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "donor", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "initial_migration",
    "created": "2019-07-17T05:24:41.031Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "createTable",
    params: [
        "donor",
        {
            "id": {
                "type": Sequelize.INTEGER(11),
                "field": "id",
                "primaryKey": true,
                "allowNull": false
            },
            "email": {
                "type": Sequelize.STRING(45),
                "field": "email",
                "allowNull": true
            },
            "admin": {
                "type": Sequelize.INTEGER(4),
                "field": "admin",
                "defaultValue": "0",
                "allowNull": true
            },
            "donation_amount": {
                "type": Sequelize.DECIMAL,
                "field": "donation_amount",
                "allowNull": true
            },
            "firstname": {
                "type": Sequelize.STRING(45),
                "field": "firstname",
                "allowNull": true
            },
            "lastname": {
                "type": Sequelize.STRING(45),
                "field": "lastname",
                "allowNull": true
            },
            "createdAt": {
                "type": Sequelize.DATE,
                "field": "createdAt",
                "allowNull": false
            },
            "updatedAt": {
                "type": Sequelize.DATE,
                "field": "updatedAt",
                "allowNull": false
            }
        },
        {}
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
