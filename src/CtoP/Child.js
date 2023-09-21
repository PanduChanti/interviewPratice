import React from "react"

function Child({ MessageChild }) {
  return (
    <div>
      <button onClick={() => MessageChild("this is child message")}>
        Child Button
      </button>
    </div>
  )
}

export default Child
