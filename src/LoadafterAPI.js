import React, { useState, useEffect } from "react"

function LoadafterAPI() {
  const [product, setProduct] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const API = `https://jsonplacehsolder.typicode.com/posts`

  useEffect(() => {
    function fetchAPI() {
      setLoading(true) //1st loading after API getting
      fetch(API) // getting API
        .then((result) => result.json())
        .then((result) => {
          setProduct(result) // Getting response
          setLoading(false) // After Getting response loading Stop
          setError(false) // Error stop
        })
        .catch((err) => {
          setError(true) // API not getting Error will be display
          setLoading(false) // API not getting Loading will be stop and getting error message
          setProduct([]) // It Display blank data
        })
    }
    fetchAPI()
  }, [])

  return (
    <div>
      {error && "error 404 site"}
      {loading && "loading...."}

      {!loading &&
        product.map((values) => {
          return <p key={values.userId}>{values.title}</p>
        })}
    </div>
  )
}

export default LoadafterAPI
