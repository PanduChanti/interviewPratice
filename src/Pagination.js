import React, { useState, useEffect } from "react"
import PaginationNumber from "./PaginationNumber"

const URL = "https://jsonplaceholder.typicode.com/posts"

function Pagination() {
  const [data, setData] = useState([])
  const [slicedData, setSlicedData] = useState([])
  const [Loading, setLoading] = useState(false)

  const FetchData = async (URL) => {
    setLoading(true)
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setData(data)
      setSlicedData(data.slice(0, 10))
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    FetchData(URL)
  }, [])

  if (Loading) {
    return <h1>Loading....</h1>
  }

  const NumberPress = (pageNumber) => {
    try {
      setSlicedData(data.slice(pageNumber * 10 - 10, pageNumber * 10))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {slicedData.map((EachData) => {
        const { id, title, body } = EachData
        return (
          <>
            <div key={id}>
              <li>{title}</li>
              <p>{body}</p>
            </div>
          </>
        )
      })}
      <PaginationNumber data={data} NumberPress={NumberPress} />
    </div>
  )
}

export default Pagination
