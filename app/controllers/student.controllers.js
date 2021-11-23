const {
  getList,
  getDetail,
  create,
  update,
  deleteById,
} = require("../services/student.services");

const getStudentList = async (req, res) => {
  const studentList = await getList();
  if (studentList) {
    res.status(200).send(studentList);
  } else {
    res.status(200).send("Not Found");
  }
};

const getStudentDetailById = async (req, res) => {
  const params = req.params;
  const id = params.id;
  const student = await getDetail(id);
  if (student) {
    res.status(200).send(student);
  } else {
    res.status(404).send("NOT FOUND!");
  }
};

const createStudent = async (req, res) => {
  let student = req.body;
  const newStudent = await create(student);
  res.status(201).send(newStudent);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const student = req.body;

  const studentUpdated = await update(id, student);

  if (studentUpdated) {
    res.status(200).send(studentUpdated);
  } else {
    res.status(404).send("NOT FOUND!");
  }
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const studentDeleted = await deleteById(id);
  if (studentDeleted) {
    res.status(200).send(studentDeleted);
  } else {
    res.status(404).send("NOT FOUND!");
  }
};

module.exports = {
  getStudentList,
  getStudentDetailById,
  createStudent,
  updateStudentById,
  deleteStudentById,
};
