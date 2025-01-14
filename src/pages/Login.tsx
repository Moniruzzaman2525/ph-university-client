import { Button } from "antd";
import { FieldValues } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { PHRorm } from "../components/form/PHRorm";
import { PHInput } from "../components/form/PHInput";

export const Login = () => {
  const navigate = useNavigate()

  const onSubmit = async (data: FieldValues) => {
    console.log(data);

    // const tostId = toast.loading('Login in')
    // try {
    //   const res = await login(data).unwrap()
    //   const user = verifyToken(res.data.accessToken) as TUser
    //   dispatch(setUser({
    //     user: user,
    //     token: res.data.accessToken
    //   }))
    //   navigate(`/${user.role}/dashboard`)
    //   toast.success('Login successfully!', { id: tostId, duration: 2000 })
    // } catch (err) {
    //   console.log(err);

    //   toast.error('Failed login!', { id: tostId, duration: 2000 })
    // }
  }
  return (
    <div>
      <PHRorm onSubmit={onSubmit}>
        <PHInput type="id" name="id" label="Id:" />
        <PHInput type="text" name="Password" label='Password' />
        <Button htmlType="submit">Login</Button>
      </PHRorm>
    </div>
  )
}
