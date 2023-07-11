import { Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"
import Loading from "./Loading"
const AuthRoute = ({ children }) => {
  console.log(useAuth0())
  const { isAuthenticated, user, isLoading } = useAuth0()
  if (isLoading) {
    return <Loading />
  }
  const isUser = isAuthenticated && user
  if (!isUser) {
    return <Navigate to="/login" />
  }
  return <>{children}</>
}
export default AuthRoute
