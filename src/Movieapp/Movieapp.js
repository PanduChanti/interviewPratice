import React, { useState, useEffect } from "react"

const Movieapp = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")

  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${search}`
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "4f50c05413mshe12eb34a51dcf24p151997jsn9512aca90cba",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  }

  const fetchData = async (url) => {
    setLoading(true)
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      console.log(result.d)
      setLoading(false)
      setData(result.d)
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [])

  const searchHandler = (e) => {
    e.preventDefault()
    fetchData(url)
    setData(search)
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
      <button onClick={searchHandler}>Search</button>

      <div>
        {loading ? (
          "Loading... "
        ) : (
          <div>
            {data.map((res) => {
              const { id, s, l, qid, y } = res
              return (
                <div key={id}>
                  <h1>{l}</h1>
                  <p>{y}</p>
                  <h4>{qid}</h4>
                  <p>{s}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default Movieapp
