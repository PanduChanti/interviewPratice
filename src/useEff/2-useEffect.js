import React, { useState, useEffect } from "react"

const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

function Index2() {
  const [drinkData, setDrinkData] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({ status: false, msg: "" })

  const FetchData = async (apiURL) => {
    setLoading(true)
    setError({ status: false, msg: "" })
    try {
      const response = await fetch(apiURL)
      const { drinks } = await response.json()
      setDrinkData(drinks)
      setLoading(false)
      setError({ status: false, msg: "" })
    } catch (error) {
      console.log(error)
      setLoading(false)
      setError({ status: true, msg: "item not avaliable" })
    }
  }

  useEffect(() => {
    FetchData(`${URL}${search}`)
  }, [search])

  if (error?.status) {
    return <h1>{error.msg}</h1>
  }

  return (
    <>
      <input
        type="text"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {(loading && <h1>loading....</h1>) || (
        <div>
          {drinkData.map((eachDrink) => {
            const { idDrink, strDrink, strDrinkThumb } = eachDrink
            return (
              <li key={idDrink}>
                <img src={strDrinkThumb} style={{ width: "10%" }} alt="drink" />
                <h3>{strDrink}</h3>
              </li>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Index2
