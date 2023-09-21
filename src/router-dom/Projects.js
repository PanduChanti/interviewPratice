import React from "react"
import { Link, Outlet } from "react-router-dom"

function Projects() {
  return (
    <div>
      <nav>
        <Link to="/projects/newprojects">Newprojects</Link>
        <Link to="/projects/oldproject">Oldproject</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default Projects
