'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "id" from table "donor"
 * addColumn "donor_id" to table "donor"
 *
 **/

var info = {
    "revision": 6,
    "name": "fixid",
    "created": "2019-08-02T20:49:43.331Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["donor", "id"]
    },
    {
        fn: "addColumn",
        params: [
            "donor",
            "donor_id",
            {
                "type": Sequelize.INTEGER(11),
                "field": "donor_id",
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
