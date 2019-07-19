'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "admin" on table "donor"
 * changeColumn "id" on table "donor"
 *
 **/

var info = {
    "revision": 2,
    "name": "fix1",
    "created": "2019-07-17T05:32:00.663Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "changeColumn",
        params: [
            "donor",
            "admin",
            {
                "type": Sequelize.BOOLEAN,
                "field": "admin",
                "defaultValue": "0",
                "allowNull": true
            }
        ]
    },
    {
        fn: "changeColumn",
        params: [
            "donor",
            "id",
            {
                "type": Sequelize.INTEGER(11),
                "field": "id",
                "autoIncrement": true,
                "primaryKey": true,
                "allowNull": false
            }
        ]
    }
];

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
