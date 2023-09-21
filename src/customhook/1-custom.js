import React from "react"
import useCustom from "./useCustom"

const URL = "https://jsonplaceholder.typicode.com/users"

const Index2 = () => {
  const [userdata, loading, error] = useCustom(URL)

  if (loading) {
    return <span class="loader"></span>
  }
  if (error) {
    return <h1>error</h1>
  }
  return (
    <div>
      {userdata.map((eachUser) => {
        return (
          <div key={eachUser.id}>
            <h3>{eachUser.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Index2
