import { Button } from "antd";
import { useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/feathers/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/feathers/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

export const Login = () => {
  const { register, handleSubmit } = useForm()
  const [login, { error }] = useLoginMutation()

  const dispatch = useAppDispatch()

  const onSubmit = async (data) => {
    const res = await login(data).unwrap()
    const user = verifyToken(res.data.accessToken)
    dispatch(setUser({
      user: user,
      token: res.data.accessToken
    }))
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="id">Id: </label>
        <input type="text" id="id" {...register('id')} />
        <label htmlFor="password">Password: </label>
        <input type="text" id="password" {...register('password')} />
        <Button htmlType="submit">Login</Button>
      </form>
    </div>
  )
}
