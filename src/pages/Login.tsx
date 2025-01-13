import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form"
import { useLoginMutation } from "../redux/feathers/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/feathers/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const Login = () => {
  const { register, handleSubmit } = useForm()
  const [login] = useLoginMutation()
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

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
