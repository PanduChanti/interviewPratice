import React, { useState } from "react"

const Index = () => {
  const Objvalues = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      age: 24,
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Doe",
      age: 24,
    },
  ]
  const [count, setCount] = useState(Objvalues)

  const deleteHandler = (id) => {
    const filterData = count.filter((eachitem) => {
      return eachitem.id !== id
    })
    console.log(filterData)
    setCount(filterData)
  }

  return (
    <>
      {count.map((eachValue) => {
        return (
          <div key={eachValue.id}>
            <p>{eachValue.firstName}</p>
            <span>{eachValue.lastName}</span>
            <p>{eachValue.age}</p>
            <button onClick={() => deleteHandler(eachValue.id)}>delete</button>
          </div>
        )
      })}
    </>
  )
}
export default Index
