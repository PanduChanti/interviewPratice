import React, { useState } from "react"

function Index2() {
  const [number, setNumber] = useState()
  const [dark, setDark] = useState(false)
  const dublefunction = numberdouble(number)

  const ChangeTheme = {
    backgroundColor: dark ? "white" : "black",
    color: dark ? "black" : "white",
  }

  return (
    <div>
      <input
        type="number"
        name="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      {dublefunction}
      <br />
      <>
        <button onClick={() => setDark(!dark)}>Change Theme</button>
        <h3 style={ChangeTheme}>this is the theme change</h3>
      </>
    </div>
  )
}

const numberdouble = (number) => {
  return number * number
}
export default Index2
