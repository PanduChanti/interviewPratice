import React from "react"
import { useNavigate } from "react-router-dom"

function About() {
  const navigation = useNavigate()

  const navigatepage = () => {
    navigation("/")
  }
  return (
    <div>
      <button onClick={navigatepage}>home</button>
    </div>
  )
}

export default About
