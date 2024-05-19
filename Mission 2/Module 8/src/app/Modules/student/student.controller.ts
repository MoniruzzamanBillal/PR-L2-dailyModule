import { Request, Response } from 'express';
import { StudentServices } from './student.service';

//! for creating a student
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const response = await StudentServices.createStudentIntoDb(studentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully !',
      data: response,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// !for getting all students data
const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.gettAllStudentsFromDb();

    res.status(200).json({
      success: true,
      message: 'Get all students data successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

// ! for getting single stuudent data
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDb(studentId);

    res.status(200).json({
      success: true,
      message: 'student data retrived successfully !!',
      data: result,
    });
  } catch (error: any) {
    console.log(error.message);
    res.status(400).json({ message: error.message });
  }
};

export const studentController = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
