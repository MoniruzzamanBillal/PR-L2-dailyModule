"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidationSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const nameSchema = joi_1.default.object({
    firstName: joi_1.default.string()
        .trim()
        .max(50)
        .required()
        .regex(/^[A-Z][a-zA-Z]*$/, "capital form") // First letter capital and alphabets only
        .messages({
        "string.base": "First name must be a string",
        "string.empty": "First name is required",
        "string.max": "First name cannot be more than 50 characters",
        "string.pattern.name": "First name must start with a capital letter",
    }),
    middleName: joi_1.default.string().optional(),
    lastsName: joi_1.default.string()
        .required()
        .pattern(/^[a-zA-Z]*$/, { name: "alphabets" }) // Only alphabets allowed
        .messages({
        "string.base": "Last name must be a string",
        "string.empty": "Last name is required",
        "string.pattern.name": "Last name must only contain alphabets",
    }),
});
const gurdianSchema = joi_1.default.object({
    fatherName: joi_1.default.string().required().messages({
        "string.base": "Father name must be a string",
        "string.empty": "Father name is required",
    }),
    fatherOccupation: joi_1.default.string().required().messages({
        "string.base": "Father occupation must be a string",
        "string.empty": "Father occupation is required",
    }),
    fatherContactNo: joi_1.default.string().required().messages({
        "string.base": "Father contact number must be a string",
        "string.empty": "Father contact number is required",
    }),
    motherName: joi_1.default.string().required().messages({
        "string.base": "Mother name must be a string",
        "string.empty": "Mother name is required",
    }),
    motherOccupation: joi_1.default.string().required().messages({
        "string.base": "Mother occupation must be a string",
        "string.empty": "Mother occupation is required",
    }),
    motherContactNo: joi_1.default.string().required().messages({
        "string.base": "Mother contact number must be a string",
        "string.empty": "Mother contact number is required",
    }),
});
const localGurdianSchema = joi_1.default.object({
    name: joi_1.default.string().required().messages({
        "string.base": "Local guardian name must be a string",
        "string.empty": "Local guardian name is required",
    }),
    occupation: joi_1.default.string().required().messages({
        "string.base": "Local guardian occupation must be a string",
        "string.empty": "Local guardian occupation is required",
    }),
    contactNo: joi_1.default.string().required().messages({
        "string.base": "Local guardian contact number must be a string",
        "string.empty": "Local guardian contact number is required",
    }),
    address: joi_1.default.string().required().messages({
        "string.base": "Local guardian address must be a string",
        "string.empty": "Local guardian address is required",
    }),
});
const studentSchema = joi_1.default.object({
    id: joi_1.default.string().required().messages({
        "string.base": "ID must be a string",
        "string.empty": "ID is required",
    }),
    name: nameSchema.required().messages({
        "object.base": "Name must be an object",
        "any.required": "Name is required",
    }),
    gender: joi_1.default.string().valid("male", "female").required().messages({
        "any.only": "Gender can either be male or female",
        "any.required": "Gender is required",
    }),
    dateOfBirth: joi_1.default.string().isoDate().messages({
        "string.base": "Date of birth must be a string",
        "string.isoDate": "Date of birth must be in ISO date format",
    }),
    email: joi_1.default.string().email().required().messages({
        "string.base": "Email must be a string",
        "string.email": "Email must be a valid email",
        "string.empty": "Email is required",
    }),
    contactNo: joi_1.default.string().required().messages({
        "string.base": "Contact number must be a string",
        "string.empty": "Contact number is required",
    }),
    emergencyContactNo: joi_1.default.string().optional(),
    BloodGroup: joi_1.default.string()
        .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
        .messages({
        "any.only": "Blood group must be one of A+, A-, B+, B-, AB+, AB-, O+, O-",
    }),
    presentAddress: joi_1.default.string().required().messages({
        "string.base": "Present address must be a string",
        "string.empty": "Present address is required",
    }),
    permanentAddress: joi_1.default.string().required().messages({
        "string.base": "Permanent address must be a string",
        "string.empty": "Permanent address is required",
    }),
    gurdian: gurdianSchema.required().messages({
        "object.base": "Guardian must be an object",
        "any.required": "Guardian is required",
    }),
    localGurdian: localGurdianSchema.required().messages({
        "object.base": "Local guardian must be an object",
        "any.required": "Local guardian is required",
    }),
    profileImg: joi_1.default.string().optional().uri().messages({
        "string.base": "Profile image must be a string",
        "string.uri": "Profile image must be a valid URI",
    }),
    isActive: joi_1.default.string().valid("active", "blocked").default("active").messages({
        "any.only": "Status must be either active or blocked",
    }),
});
exports.studentValidationSchema = studentSchema;
