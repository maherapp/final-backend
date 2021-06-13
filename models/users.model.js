module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("users", {
    userName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phoneNumber: {
      type: DataTypes.INTEGER,
    },
  });
  return User;
};
