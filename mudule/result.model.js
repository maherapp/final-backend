
modeule.export = (sequelize, DataTypes) => {
    const Result = sequelize.define('Result', {
        resultDate:{
            type: DataTypes.STRING
        }
    });
    return Result;
}