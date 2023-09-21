import React, { useReducer, useEffect, useState } from "react"

const reducer = (state, action) => {
  if (action.type === "UPDATE_FETCH_USER") {
    return {
      ...state,
      userData: action.payload,
    }
  }
  if (action.type === "Loading") {
    return {
      ...state,
      isLoading: action.payload,
    }
  }
  if (action.type === "DELETE") {
    const Newperson = state.userData.filter(
      (eachperson) => eachperson.id !== action.payload
    )
    return {
      ...state,
      userData: Newperson,
    }
  }

  if (action.type === "Edit_user") {
    return {
      ...state,
      isEditing: action.payload,
    }
  }
  return state
}

const Index2 = () => {
  const fetchUserData = async (URL) => {
    dispatch({ type: "Loading", payload: true })
    dispatch({ type: "error", payload: { statue: false, msg: "" } })
    try {
      const response = await fetch(URL)
      const data = await response.json()
      dispatch({
        type: "UPDATE_FETCH_USER",
        payload: data,
      })
      dispatch({ type: "error", payload: { statue: false, msg: "" } })
      dispatch({ type: "Loading", payload: false })
    } catch (err) {
      console.log(err)
      dispatch({ type: "error", payload: err })
    }
  }

  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users")
  }, [])
  const initialState = {
    userData: [],
    isLoading: false,
    isError: { state: "false", msg: "" },
    isEditing: { state: "false", id: "", name: "", email: "" },
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const Deletehandler = (id) => {
    dispatch({ type: "DELETE", payload: id })
  }

  const updateData = () => {}
  if (state.isLoading) {
    return (
      <>
        <h3>Loading....</h3>
      </>
    )
  }
  return (
    <>
      <h1>user-Information</h1>

      <center>
        {state.isEditing?.state && (
          <Editcontent
            id={state.isEditing.id}
            dataname={state.isEditing.name}
            dataemail={state.isEditing.email}
            updateData={updateData}
          />
        )}
        {state.userData.map((eachUser) => {
          const { id, name, email } = eachUser
          return (
            <div key={id}>
              <h3>{name}</h3>
              <p>{email}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "Edit_user",
                    payload: { state: true, id: id, name: name, email: email },
                  })
                }
              >
                Edit
              </button>
              <button onClick={() => Deletehandler(id)}>Delete</button>
            </div>
          )
        })}
      </center>
    </>
  )
}

const Editcontent = ({ id, dataname, dataemail, updateData }) => {
  const [title, setTitle] = useState(dataname || "")
  const [email, setEmail] = useState(dataemail || "")
  return (
    <>
      <h1>Form</h1>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={() => updateData(id, title, email)}>
          Update Data
        </button>
      </form>
    </>
  )
}

export default Index2
