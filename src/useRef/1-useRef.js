import React, { useState, useEffect, useRef } from "react"

function Index2() {
  const [names, setName] = useState("")
  const countRender = useRef(1)

  useEffect(() => {
    countRender.current = countRender.current + 1
  })

  return (
    <div>
      <input
        type="text"
        name="names"
        id="names"
        value={names}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>typing... {names}</h3>
      <p>
        component render<b>{countRender.current}</b>times
      </p>
    </div>
  )
}

export default Index2
