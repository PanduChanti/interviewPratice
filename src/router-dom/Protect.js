import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { getFakeLogin } from "./Auth"

function Protect(props) {
  const Islogged = getFakeLogin
  return Islogged ? <Outlet /> : <Navigate to="/" />
}

export default Protect
