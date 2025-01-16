import { z } from "zod";


export const academicFacultySchema = z.object({
    designation: z.string({
        required_error: 'Designation is required'
    }),
    firstName: z.string({
        required_error: 'First Name is required'
    }),
    middleName: z.string(),
    lastName: z.string({
        required_error: 'Last Name is required'
    }),
    gender: z.string({
        required_error: 'Gender is required'
    }),
    email: z.string({
        required_error: 'Invalid email address'
    }),
    dateOfBirth: z.string({
        required_error: 'Date of Birth is required'
    }),
    contactNo: z.string().regex(/^\d{10}$/, "Invalid contact number"),
    emergencyContactNo: z.string().regex(/^\d{10}$/, "Invalid emergency contact number"),
    bloodGroup: z.string({
        required_error: 'Blood Group is required'
    }),
    presentAddress: z.string({
        required_error: 'Present Address is required'
    }),
    permanentAddress: z.string({
        required_error: "Permanent Address is required"
    }),
    academicDepartment: z.string({
        required_error: 'Academic Department is required'
    }),
})