import React from "react"
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/users">Users</NavLink>
    </div>
  )
}

export default Nav
