import React, { useReducer } from "react"

const initialstate = { count: 0 }

function reducerFunction(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
  }
}

const Index2 = () => {
  const [state, dispatch] = useReducer(reducerFunction, initialstate)
  return (
    <>
      count :{state.count}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  )
}

export default Index2
