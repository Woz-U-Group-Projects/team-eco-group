'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "cause" to table "donor"
 * changeColumn "id" on table "donor"
 * changeColumn "lastname" on table "donor"
 *
 **/

var info = {
    "revision": 5,
    "name": "three",
    "created": "2019-08-02T20:29:35.318Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "addColumn",
        params: [
            "donor",
            "cause",
            {
                "type": Sequelize.STRING(100),
                "field": "cause",
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
    },
    {
        fn: "changeColumn",
        params: [
            "donor",
            "lastname",
            {
                "type": Sequelize.STRING(45),
                "field": "lastname",
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
