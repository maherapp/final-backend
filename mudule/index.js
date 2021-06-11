const {Sequelize, DataTypes} = require('sequelize');
const User = require('./users.module');
const Test = require('./result.model');
const Patient = require('./patient.model')
const LabTestsType = require('./labteststype.model');
const TestType = require('./testType.model');
const TestResult = require('./test_result.model');
const Lab = require('./lab.module');
const sequelize = new Sequelize('t', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });      



const UserModel = User(sequelize, DataTypes);
const LabModel = Lab(sequelize, DataTypes);
LabModel.hasMany(UserModel);
UserModel.belongsTo(LabModel);

const PatientModel = Patient(sequelize, DataTypes);
const TestModel =   Test(sequelize, DataTypes);
PatientModel.hasMany(TestModel);
TestModel.belongsTo(PatientModel);

const TestTypeModel = TestType(sequelize,DataTypes);
const LabTestsTypeModel = LabTestsType(sequelize,DataTypes);
TestTypeModel.hasMany(LabTestsTypeModel);
LabTestsTypeModel.belongsTo(TestTypeModel);
LabModel.hasMany(LabTestsTypeModel);
LabTestsTypeModel.belongsTo(LabModel);

const TestResultModel = TestResult(sequelize, DataTypes);
LabTestsTypeModel.hasMany(TestResultModel);
TestResultModel.belongsTo(LabTestsTypeModel);
TestModel.hasMany(TestResultModel);
TestResultModel.belongsTo(TestModel);

exports.TestResultModel = TestResultModel;
exports.TestTypeModel = TestTypeModel;
exports.LabTestsTypeModel = LabTestsTypeModel;
exports.PatientModel = PatientModel;
exports.TestModel = TestModel;
exports.UserModel = UserModel;
exports.LabModel = LabModel;
exports.sequelize = sequelize;