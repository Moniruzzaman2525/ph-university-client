import { Button, Col, Row, Flex } from "antd";
import { PHRorm } from "../../../components/form/PHRorm";
import { PHInput } from "../../../components/form/PHInput";

export const CreateAcademicFaculty = () => {
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHRorm onSubmit={onSubmit}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <PHInput type="text" name="designation" label="Designation" />
              <PHInput type="text" name="firstName" label="First Name" />
              <PHInput type="text" name="middleName" label="Middle Name" />
              <PHInput type="text" name="lastName" label="Last Name" />
              <PHInput type="text" name="gender" label="Gender" />
              <PHInput type="text" name="email" label="Email" />
              <PHInput type="text" name="dateOfBirth" label="Date Of Birth" />
            </Col>
            <Col span={12}>
              <PHInput type="text" name="contactNo" label="Contact No" />
              <PHInput type="text" name="emergencyContactNo" label="Emergency Contact No" />
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
              <PHInput type="text" name="presentAddress" label="Present Address" />
              <PHInput type="text" name="permanentAddress" label="Permanent Address" />
              <PHInput type="text" name="academicDepartment" label="Academic Department" />
            </Col>
            <Col span={24}>
              <Button htmlType="submit" block>
                Submit
              </Button>
            </Col>
          </Row>
        </PHRorm>
      </Col>
    </Flex>
  );
};
