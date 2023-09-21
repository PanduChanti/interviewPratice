import React, { useState, useEffect } from "react"

function Chatgbt() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch("https://jsonsplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setError(error)
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  )
}

export default Chatgbt
