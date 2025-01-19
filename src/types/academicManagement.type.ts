export interface TAcademicSemester {
    _id: string
    name: string
    year: string
    code: string
    startMonth: string
    endMonth: string
    createdAt: string
    updatedAt: string
  }
  export type TAcademicDepartment = {
    _id: string
    name: string
    academicfaculty: string
    createdAt: string
    updatedAt: string
    __v: number
  }