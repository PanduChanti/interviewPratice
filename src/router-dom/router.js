import React, { useState } from "react"
import About from "./About"
import Home from "./Home"
import { Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Pagenotfound from "./Pagenotfound"
import Projects from "./Projects"
import Newprojects from "./Newprojects"
import Oldproject from "./Oldproject"
import Users from "./users"
import Userdetails from "./userdetails"

const Router = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />}>
          {/*   nested router*/}
          <Route index element={<Newprojects />} />
          <Route path="newprojects" element={<Newprojects />} />
          <Route path="oldproject" element={<Oldproject />} />
        </Route>

        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />

        <Route path="/users/:userId" element={<Userdetails />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  )
}

export default Router
