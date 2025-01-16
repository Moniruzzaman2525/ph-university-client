import { Button, Col, Row, Flex } from "antd";
import { PHRorm } from "../../../components/form/PHRorm";
import { PHInput } from "../../../components/form/PHInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "../../../schema/academicFaculty.schema";
import { useCreateAcademicFacultyMutation } from "../../../redux/feathers/admin/academicManagement.api";
import { FieldValues, SubmitHandler } from "react-hook-form";

export const CreateAcademicFaculty = () => {

  const [createAcademicFaculty] = useCreateAcademicFacultyMutation()

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      const facultyData = {
        name: {
          firstName: data.firstName,
          middleName: data.middleName,
          lastName: data.lastName,
        },
        designation: data.designation,
        gender: data.gender,
        email: data.email,
        dateOfBirth: data.dateOfBirth,
        contactNo: data.contactNo,
        emergencyContactNo: data.emergencyContactNo,
        bloodGroup: data.bloodGroup,
        presentAddress: data.presentAddress,
        permanentAddress: data.permanentAddress,
        academicDepartment: data.academicDepartment
      };
      formData.append("data", JSON.stringify({ faculty: facultyData }));

      const res = await createAcademicFaculty(formData).unwrap();
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  };




  return (
    <Flex justify="center" align="center">
      <Col span={12}>
        <PHRorm onSubmit={onSubmit} resolver={zodResolver(academicFacultySchema)}>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <PHInput type="text" name="firstName" label="First Name" />
              <PHInput type="text" name="middleName" label="Middle Name" />
              <PHInput type="text" name="designation" label="Designation" />
              <PHInput type="text" name="contactNo" label="Contact No" />
              <PHInput type="text" name="dateOfBirth" label="Date Of Birth" />
              <PHInput type="text" name="emergencyContactNo" label="Emergency Contact No" />
              <PHInput type="text" name="permanentAddress" label="Permanent Address" />

            </Col>
            <Col span={12}>
              <PHInput type="text" name="lastName" label="Last Name" />
              <PHInput type="password" name="password" label="Password" />
              <PHInput type="text" name="email" label="Email" />
              <PHInput type="text" name="gender" label="Gender" />
              <PHInput type="text" name="bloodGroup" label="Blood Group" />
              <PHInput type="text" name="presentAddress" label="Present Address" />
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
