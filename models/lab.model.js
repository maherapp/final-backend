module.exports = (sequelize, DataTypes) => {
  const Lab = sequelize.define("Lab", {
    picturePath: {
      type: DataTypes.STRING,
    },
    labName: {
      type: DataTypes.STRING,
    },
    adress: {
      type: DataTypes.STRING,
    },
  });
  return Lab;
};
