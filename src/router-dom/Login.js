import React from "react"

function Login() {
  const loginHandler = () => {
    localStorage.setItem("Islogged", true)
  }
  return (
    <div>
      <h1>Login</h1>
      <div>
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  )
}

export default Login
