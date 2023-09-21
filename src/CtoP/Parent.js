import React, { useState } from "react"
import Child from "./Child"

function Parent() {
  const [message, setMessage] = useState("this is parent message")
  const MessageChild = (msg) => {
    setMessage(msg)
  }
  return (
    <div>
      <p>{message}</p>
      <Child MessageChild={MessageChild} />
    </div>
  )
}

export default Parent
