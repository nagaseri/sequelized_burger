module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: {
          len: [1, 140]
        }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    created_at: {
      type: DataTypes.DATE
    }
  }, {
    timestamps: false
  });
  return Burger;
}