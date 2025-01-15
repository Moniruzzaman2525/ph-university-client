import { FieldValues, SubmitHandler } from "react-hook-form"
import { PHRorm } from "../../../components/form/PHRorm"
import { Button, Col, Flex } from "antd"
import { PhSelect } from "../../../components/form/PhSelect"
import { semesterOptions } from "../../../constants/semester"
import { monthOptions } from "../../../constants/global"
import { zodResolver } from "@hookform/resolvers/zod"
import { academicSemesterSchema } from "../../../schema/academicManagement.schema"
import { useAcademicSemesterMutation } from "../../../redux/feathers/admin/academicManagement.api"
import { toast } from "sonner"
import { TResponse } from "../../../types/global"


const currentYear = new Date().getFullYear()

const yearOptions = [0, 1, 2, 3, 4, 5].map(number => ({
  value: String(currentYear + number),
  label: String(currentYear + number)
}))

export const CreateAcademicSemester = () => {

  const [addAcademicSemester] = useAcademicSemesterMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {

    const toastId = toast.loading('Creating...')

    const name = semesterOptions[Number(data?.name) - 1]?.label

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth
    }
    try {
      const res = await addAcademicSemester(semesterData) as TResponse
      if (res.error) {
        toast.error(res.error.data.message, {id: toastId})
      } else {
        toast.success('Semester created', {id: toastId})
      }
      console.log(res)
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong", {id: toastId})
    }
  }



  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHRorm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <PhSelect label='Name' name='name' options={semesterOptions} />
          <PhSelect label='Year' name='year' options={yearOptions} />
          <PhSelect label='Start Month' name='startMonth' options={monthOptions} />
          <PhSelect label='End Month' name='endMonth' options={monthOptions} />
          <Button htmlType="submit">Submit</Button>
        </PHRorm>
      </Col>
    </Flex>

  )
}
