import React, { useContext } from "react"

const Context = React.createContext()

function Provider() {
  const data = 342
  return (
    <div>
      parent component <br />
      <br />
      <Context.Provider value={data}>
        <B />
      </Context.Provider>
    </div>
  )
}

function A() {
  return <>child components </>
}

function B() {
  const data = useContext(Context)
  return <>subChild components: {data}</>
}

export default Provider
