import React, { useState, useRef } from "react"

function Index2() {
  const [names, setNames] = useState("")
  const focusDOM = useRef("")

  const Focus = () => {
    focusDOM.current.focus()
  }

  return (
    <div>
      <input
        ref={focusDOM}
        type="text"
        name="names"
        value={names}
        onChange={(e) => setNames(e.target.value)}
      />
      <button onClick={Focus}>focus</button>
    </div>
  )
}

export default Index2
