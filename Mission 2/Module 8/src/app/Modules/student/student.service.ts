import { Student } from './student.interface';
import { StudentModel } from './student.model';

// ! for creating a student
const createStudentIntoDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

// ! for getting all students data
const gettAllStudentsFromDb = async () => {
  const response = await StudentModel.find();
  return response;
};

// !for getting  single student
const getSingleStudentFromDb = async (id: string) => {
  const response = await StudentModel.findOne({ id });

  return response;
};

export const StudentServices = {
  createStudentIntoDb,
  gettAllStudentsFromDb,
  getSingleStudentFromDb,
};
