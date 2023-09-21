import React, { useState } from "react"

function Index2() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(!open)}>{open ? "hide" : "show"}</button>
      {/* {open && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
          illo rerum magnam fugit dolorem perspiciatis voluptatum nihil
          repudiandae voluptate atque hic, neque doloremque!
        </div>
      )} */}

      {open ? (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid rem
          illo rerum magnam fugit dolorem perspiciatis voluptatum nihil
          repudiandae voluptate atque hic, neque doloremque!
        </div>
      ) : (
        <p>data was hidden</p>
      )}
    </div>
  )
}

export default Index2
