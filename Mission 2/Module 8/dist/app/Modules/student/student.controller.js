"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
const student_service_1 = require("./student.service");
//! for creating a student
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { student: studentData } = req.body;
        const response = yield student_service_1.StudentServices.createStudentIntoDb(studentData);
        res.status(200).json({
            success: true,
            message: 'Student created successfully !',
            data: response,
        });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
});
// !for getting all students data
const getAllStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.gettAllStudentsFromDb();
        res.status(200).json({
            success: true,
            message: 'Get all students data successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
});
// ! for getting single stuudent data
const getSingleStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { studentId } = req.params;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDb(studentId);
        res.status(200).json({
            success: true,
            message: 'student data retrived successfully !!',
            data: result,
        });
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({ message: error.message });
    }
});
exports.studentController = {
    createStudent,
    getAllStudent,
    getSingleStudent,
};
