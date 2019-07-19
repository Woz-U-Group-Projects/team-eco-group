'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * changeColumn "id" on table "donor"
 *
 **/

var info = {
    "revision": 3,
    "name": "fix2",
    "created": "2019-07-17T05:33:01.128Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "changeColumn",
    params: [
        "donor",
        "id",
        {
            "type": Sequelize.INTEGER(11),
            "field": "id",
            "primaryKey": true,
            "allowNull": false
        }
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
