import React, { useState } from "react"

function Make() {
  const [loading, setLoading] = useState(false)

  const LoadingHandler = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <>
      <div data-testid="hello">
        <h1>Hello world</h1>
        {loading ? (
          <button>Loading...</button>
        ) : (
          <button onClick={LoadingHandler}>Login</button>
        )}
      </div>
    </>
  )
}

export default Make
