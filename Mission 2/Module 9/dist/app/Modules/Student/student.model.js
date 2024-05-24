"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const nameSchema = new mongoose_1.Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"],
        trim: true, //remove space
        maxlength: [50, "first name cannot be more thttan 50 char !! "],
        validate: {
            validator: function (value) {
                const firstName = value.charAt(0).toUpperCase() + value.slice(1);
                return firstName === value;
            },
            message: "{VALUE} is not in capital form",
        },
    },
    middleName: { type: String },
    lastsName: {
        type: String,
        required: [true, "last name is required"],
        validate: {
            validator: (value) => validator_1.default.isAlpha(value),
            message: "{VALUE} is not valid!!",
        },
    },
});
const gurdianSchema = new mongoose_1.Schema({
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
});
const localGurdianSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
});
const studentSchema = new mongoose_1.Schema({
    id: { type: String, required: true, unique: true },
    name: {
        type: nameSchema,
        required: true,
    },
    gender: {
        type: String,
        enum: {
            values: ["male", "female"],
            message: "Gender can either male or female",
        },
        required: true,
    },
    dateOfBirth: { type: String },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String },
    BloodGroup: {
        type: String,
        enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    gurdian: { type: gurdianSchema, required: true },
    localGurdian: { type: localGurdianSchema, required: true },
    profileImg: { type: String },
    isActive: {
        type: String,
        enum: ["active", "blocked"],
        default: "active",
    },
});
exports.StudentModel = (0, mongoose_1.model)("Student", studentSchema);
