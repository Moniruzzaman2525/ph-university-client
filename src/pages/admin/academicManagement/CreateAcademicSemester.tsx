import { FieldValues, SubmitHandler } from "react-hook-form"
import { PHRorm } from "../../../components/form/PHRorm"
import { Button, Col, Flex } from "antd"
import { PhSelect } from "../../../components/form/PhSelect"
import { semesterOptions } from "../../../semester"
import { monthOptions } from "../../../global"


const currentYear = new Date().getFullYear()

const yearOptions = [0, 1, 2, 3, 4, 5].map(number => ({
  value: String(currentYear + number),
  label: String(currentYear + number)
}))

export const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    const name = semesterOptions[Number(data?.name) - 1]?.label

    const semesterData = {
      name,
      code: data?.name,
      year: data?.year,
      startMonth: data?.startMonth,
      endMonth: data?.endMonth
    }
    console.log(semesterData)
  }



  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHRorm onSubmit={onSubmit}>
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
