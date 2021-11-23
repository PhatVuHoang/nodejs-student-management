const { DataTypes } = require("sequelize/dist");

const createStudentModel = (sequelize) => {
  return sequelize.define(
    "Student",
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      numberClass: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      // object optional
      tableName: "students",
      timestamps: true, //default true
    }
  );
};

module.exports = {
  createStudentModel,
};
