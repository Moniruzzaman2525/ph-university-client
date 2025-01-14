import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { PHRorm } from "../components/form/PHRorm";
import { PHInput } from "../components/form/PHInput";
import { setUser, TUser } from "../redux/feathers/auth/authSlice";
import { toast } from "sonner";
import { verifyToken } from "../utils/verifyToken";
import { useLoginMutation } from "../redux/feathers/auth/authApi";
import { useAppDispatch } from "../redux/hooks";

export const Login = () => {
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  const defaultValues = {
    id: 'A-0001',
    password: 'admin'
  }


  const onSubmit = async (data: FieldValues) => {

    const tostId = toast.loading('Login in')
    try {
      const res = await login(data).unwrap()
      const user = verifyToken(res.data.accessToken) as TUser
      dispatch(setUser({
        user: user,
        token: res.data.accessToken
      }))
      navigate(`/${user.role}/dashboard`)
      toast.success('Login successfully!', { id: tostId, duration: 2000 })
    } catch (err) {
      console.log(err);

      toast.error('Failed login!', { id: tostId, duration: 2000 })
    }
  }
  return (
    <Row justify='center' align='middle' style={{ height: '100vh' }}>
      <PHRorm onSubmit={onSubmit} defaultValues={defaultValues}>
        <PHInput type="id" name="id" label="Id:" />
        <PHInput type="text" name="password" label='password' />
        <Button htmlType="submit">Login</Button>
      </PHRorm>
    </Row>
  )
}
