'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "donor_id" from table "donor"
 * addColumn "id" to table "donor"
 *
 **/

var info = {
    "revision": 7,
    "name": "noname",
    "created": "2019-08-02T20:51:26.378Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["donor", "donor_id"]
    },
    {
        fn: "addColumn",
        params: [
            "donor",
            "id",
            {
                "type": Sequelize.INTEGER,
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
