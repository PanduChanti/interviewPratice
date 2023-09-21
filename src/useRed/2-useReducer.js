import React, { useReducer } from "react"

const reducer = (state, action) => {
  if (action.type === "delete_person") {
    const newperson = state.data.filter(
      (eachperson) => eachperson.id !== action.payload
    )
    return {
      ...state,
      data: newperson,
      length: state.length - 1,
    }
  }
  return state
}

const Index2 = () => {
  const initinalstate = {
    data: [
      { id: 1, name: "pandu", email: "pandu@gmail.com" },
      { id: 2, name: "chanti", email: "chanti@gmail.com" },
    ],
    length: 2,
  }
  const [state, dispatch] = useReducer(reducer, initinalstate)

  const deleteHandler = (id) => {
    dispatch({
      type: "delete_person",
      payload: id,
    })
  }
  const editHandler = (id) => {
    dispatch({
      type: "edit_person",
      payload: id,
    })
  }
  return (
    <>
      <center>
        <h1>current users:{state.length}</h1>
        {state.data.map((eachItem) => {
          const { id, name, email } = eachItem
          return (
            <div key={id}>
              <h4>{name}</h4>
              <p>{email}</p>
              <button onClick={() => deleteHandler(id)}>delete</button>
              <button onClick={() => editHandler(id)}>edit</button>
            </div>
          )
        })}
      </center>
    </>
  )
}

export default Index2
