
modeule.export = (sequelize, DataTypes) => {
    const Patient = sequelize.define('Patient', {
        patientName :{
            type: DataTypes.STRING
        },patientPhoneNumber:{
            type: DataTypes.INTEGER
        },patientAge: {
            type: DataTypes.INTEGER
        }
    });
    return Patient;
}