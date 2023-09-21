import { Navigate, Outlet } from "react-router-dom"

const PrivateRouter = () => {
  const isAuth = localStorage.getItem("isLogged") // Corrected missing 'const' declaration

  return isAuth !== "true" ? <Navigate to="/" /> : <Outlet /> // Corrected '!==' comparison operator
}

export default PrivateRouter // Corrected component name in export statement
