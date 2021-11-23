const { Student } = require("../model");

let studentList = [
  {
    id: 1,
    fullName: "Vũ Hoàng Phát",
    age: 21,
    numberClass: "SE1410",
  },
  {
    id: 2,
    fullName: "Tony A",
    age: 21,
    numberClass: "SE1410",
  },
  {
    id: 3,
    fullName: "John B",
    age: 21,
    numberClass: "SE1410",
  },
];

const getList = async () => {
  const studentList = await Student.findAll();
  if (studentList) return studentList;
  return false;
};

const getDetail = async (id) => {
  const student = await Student.findOne({
    where: {
      id,
    },
  });
  if (student) {
    return student;
  } else {
    return false;
  }
};

const create = async (student) => {
  const newStudent = await Student.create(student);
  return newStudent;
};

const update = async (id, student) => {
  const studentUpdate = await getDetail(id);
  if (studentUpdate) {
    studentUpdate.fullName = student.fullName;
    studentUpdate.age = student.age;
    studentUpdate.numberClass = student.numberClass;
    const studentUpdated = await studentUpdate.save();
    return studentUpdated;
  } else {
    return false;
  }
};

const deleteById = async (id) => {
  const studentDelete = await getDetail(id);
  if (studentDelete) {
    await Student.destroy({
      where: {
        id,
      },
    });
    return studentDelete;
  } else {
    return false;
  }
};

module.exports = {
  getList,
  getDetail,
  create,
  update,
  deleteById,
};
