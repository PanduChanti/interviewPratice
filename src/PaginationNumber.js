import React from "react"

function PaginationNumber({ data, NumberPress }) {
  const PageNumbers = []
  for (let i = 1; i < Math.ceil(data.length / 10); i++) {
    PageNumbers.push(i)
  }
  return (
    <div>
      {PageNumbers.map((pageNumber) => {
        return (
          <button onClick={() => NumberPress(pageNumber)}>{pageNumber}</button>
        )
      })}
    </div>
  )
}

export default PaginationNumber
