import React from "react"
import useCustom from "./useCustom"

const URL = "https://jsonplaceholder.typicode.com/posts"

function Index2() {
  const [data, loading, error] = useCustom(URL)

  console.log(data)

  if (loading) {
    return <h1>loading....</h1>
  }

  if (error) {
    return <h1>error</h1>
  }
  return (
    <div>
      <h1>posts</h1>
      {data.map((eachPost) => {
        return <h5 key={eachPost.id}>{eachPost.title}</h5>
      })}
    </div>
  )
}

export default Index2
