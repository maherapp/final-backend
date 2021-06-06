module.exports = (sequelize, DataTypes) => {
    const TestResult = sequelize.define("TestResult", {
        firstTestResult : {
            type: DataTypes.STRING
        },secondTestResult: {
            type: DataTypes.STRING
        }
    })
}