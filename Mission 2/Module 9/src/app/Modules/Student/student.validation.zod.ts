import { z } from "zod";
import validator from "validator";

// Name Schema
const nameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .max(50, "First name cannot be more than 50 characters")
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: "First name must start with a capital letter",
    }),
  middleName: z.string().optional(),
  lastName: z.string().refine((value) => validator.isAlpha(value), {
    message: "value is not valid !!",
  }),
});

// Guardian Schema
const guardianSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

// Local Guardian Schema
const localGuardianSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

// Student Schema
const studentSchema = z.object({
  id: z.string(),
  name: nameSchema,
  gender: z.enum(["male", "female"], {
    errorMap: () => ({ message: "Gender can either be male or female" }),
  }),
  dateOfBirth: z.string().optional(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string().optional(),
  BloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"])
    .optional(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  profileImg: z.string().optional(),
  isActive: z.enum(["active", "blocked"]).default("active"),
});

export { studentSchema };
