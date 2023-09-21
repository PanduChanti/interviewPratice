import React, { useState } from "react"
import Todolist from "./Todolist"

function Image() {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState([])

  const changeHandler = (e) => {
    setTask(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const newTodos = [...todos, task] //Destructing
    setTodos(newTodos)
    setTask("")
  }

  const delHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue)
    setTodos(newTodos)
  }

  return (
    <>
      <center>
        <form onSubmit={submitHandler}>
          <h4>Todo List</h4>
          <input
            type="text"
            name="todo"
            value={task}
            onChange={changeHandler}
          />
          &nbsp;&nbsp;
          <input type="submit" value="Add" name="Add" />
        </form>
        <Todolist todos={todos} delHandler={delHandler} />
      </center>
    </>
  )
}

export default Image
