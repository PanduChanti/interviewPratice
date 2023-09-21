import React, { useEffect } from "react"
import { useState } from "react"

const URL = "https://jsonplaceholder.typicode.com/users"

function Index2() {
  const [userData, setuserData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ status: false, msg: "" })

  const fetchData = async (apiURL) => {
    setLoading(true)
    setError({ status: false, msg: "" })
    try {
      const response = await fetch(apiURL)
      const data = await response.json()
      setuserData(data)
      setLoading(false)
      setError({ status: false, msg: "" })
      if (response.status === 404) {
        throw new Error("404 error")
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError({ status: true, msg: error.message || "Api problem plz check" })
    }
  }

  useEffect(() => {
    fetchData(URL)
  }, [])

  if (loading) {
    return (
      <div>
        <h1 style={{ color: "green" }}>Loading...</h1>
      </div>
    )
  }

  if (error?.status) {
    return (
      <div>
        <h1 style={{ color: "red" }}>{error.msg}</h1>
      </div>
    )
  }

  return (
    <div>
      {
        <ul>
          {userData.map((eachUser) => {
            const { id, name } = eachUser
            return (
              <li key={id}>
                <div>{name}</div>
              </li>
            )
          })}
        </ul>
      }
    </div>
  )
}

export default Index2
