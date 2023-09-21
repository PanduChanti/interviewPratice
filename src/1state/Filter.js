import React, { useState } from "react"
import City from "./Data.json" //json file

function Filter() {
  const [search, setSearch] = useState("")
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {City.filter((city) =>
        city.name.toLowerCase().includes(search.toLowerCase())
      ).map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
    </div>
  )
}

export default Filter
