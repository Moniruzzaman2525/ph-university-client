import { FieldValues, SubmitHandler } from "react-hook-form"
import { PHInput } from "../../../components/form/PHInput"
import { PHRorm } from "../../../components/form/PHRorm"
import { Button, Col, Flex } from "antd"
import { PhSelect } from "../../../components/form/PhSelect"

export const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data)
  }
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHRorm onSubmit={onSubmit}>
          <PHInput type="text" name="name" label='name' />
          <PHInput type="text" name="name" label="year" />
          <PhSelect label='name' />
          <Button htmlType="submit">Submit</Button>
        </PHRorm>
      </Col>
    </Flex>

  )
}
