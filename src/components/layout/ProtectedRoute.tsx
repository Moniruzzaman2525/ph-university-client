import { ReactNode } from "react"
import { useCurrentToken } from "../../redux/feathers/auth/authSlice"
import { useAppSelector } from "../../redux/hooks"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    // const token = useAppSelector(state => state.auth.token)
    const token = useAppSelector(useCurrentToken)
    if (!token) {
        return <Navigate to='/login' replace={true} />
    }
    return children
}
