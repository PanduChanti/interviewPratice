import React from "react"

function Todolist({ todos, delHandler }) {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index}>
          <h3>
            {todo} &nbsp;
            <button onClick={() => delHandler(index)}>Delete</button>
          </h3>
        </div>
      ))}
    </>
  )
}

export default Todolist
