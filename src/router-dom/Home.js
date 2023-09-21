import React from "react"
import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  const navigatepage = () => {
    navigate("/about")
  }
  return (
    <div>
      <h1>this is home page</h1>
      <button onClick={navigatepage}>about</button>
    </div>
  )
}

export default Home
