import { useGetAllSemesterQuery } from "../../../redux/feathers/academicSemester/academicSemesterApi"

export const AcademicSemester = () => {

  const { data } = useGetAllSemesterQuery(undefined)
  console.log(data);


  return (
    <div>AcademicSemester</div>
  )
}
