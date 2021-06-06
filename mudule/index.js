const {Sequelize, DataTypes} = require('sequelize');
const User = require('./users.module');
const Result = require('./result.model');
const Patient = require('./patient.model')
const LabTestsType = require('./labteststype.model');
const TestType = require('./testType.model');
const TestResult = require('./test_result.model');

const sequelize = new Sequelize('t', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
  });      



const UserModel = User(sequelize, DataTypes);
const LabModel = lab(sequelize, DataTypes);
LabModel.hasMany(UserModel);
UserModel.belongsTo(LabModel);

const PatientModel = Patient(sequelize, DataTypes);
const ResultModel =   Result(sequelize, DataTypes);
PatientModel.hasMany(ResultModel);
ResultModel.belongsTo(PatientModel);

const TestTypeModel = TestType(sequelize,DataTypes);
const LabTestsTypeModel = LabTestsType(sequelize,DataTypes);
TestTypeModel.hasMany(LabTestsTypeModel);
LabTestsTypeModel.belongsTo(TestTypeModel);
LabModel.hasMany(LabTestsTypeModel);
LabTestsTypeModel.belongsTo(LabModel);

const TestResultModel = TestResult(sequelize, DataTypes);
LabTestsTypeModel.hasMany(TestResultModel);
TestResultModel.bleongsTo(LabTestsTypeModel);
ResultModel.hasMany(TestResultModel);
TestResultModel.belongsTo(ResultModel);


exports.TestTypeModel = TestTypeModel;
exports.LabTestsTypeModel = LabTestsTypeModel;
exports.PatientModel = PatientModel;
exports.ResultModel = ResultModel;
exports.UserModel = UserModel;
exports.LabModel = LabModel;
exports.sequelize = sequelize;