module.exports = (sequelize, DataTypes) => {
  const Test = sequelize.define("test", {
    resultDate: {
      type: DataTypes.STRING,
    },
  });
  return Test;
};
