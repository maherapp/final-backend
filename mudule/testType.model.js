
modeule.export = (sequelize, DataTypes) => {
    const TestsType = sequelize.define('TestsType', {
        testType:{
            type: DataTypes.STRING
        }
    });
    return TestsType;
}