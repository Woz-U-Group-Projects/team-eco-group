/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('donor', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: '0'
    },
    donation_amount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'donor'
  });
};
