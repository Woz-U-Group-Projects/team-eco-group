'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * removeColumn "createdAt" from table "donor"
 * removeColumn "updatedAt" from table "donor"
 * changeColumn "donation_amount" on table "donor"
 *
 **/

var info = {
    "revision": 4,
    "name": "cents",
    "created": "2019-07-18T06:27:59.734Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "removeColumn",
        params: ["donor", "createdAt"]
    },
    {
        fn: "removeColumn",
        params: ["donor", "updatedAt"]
    },
    {
        fn: "changeColumn",
        params: [
            "donor",
            "donation_amount",
            {
                "type": Sequelize.DECIMAL(10, 2),
                "field": "donation_amount",
                "allowNull": true
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
