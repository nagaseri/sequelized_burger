var Burger = sequelize.define("burgers", {
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

// Syncs with DB
Burger.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Burger;
