import React, { useState } from "react"

const MyComponent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
    </div>
  )
}

export default MyComponent
