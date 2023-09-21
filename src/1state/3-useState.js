import React, { useState } from "react"

function Index2() {
  const [message, setMessage] = useState({
    text: "",
    id: "",
  })
  const [lists, setList] = useState([])
  const [editinglists, setEditinglists] = useState({
    id: "",
    isEditing: false,
  })

  const changeHandler = (e) => {
    setMessage({
      text: e.target.value,
      id: new Date().getTime().toString(),
    })
  }

  const addHandler = (e) => {
    e.preventDefault()
    setList([...lists, message])
    setMessage({
      text: "",
      id: "",
    })
  }

  const deleteHandler = (e, id) => {
    e.preventDefault()
    const delteitems = lists.filter((items) => items.id !== id)
    setList(delteitems)
  }

  const editHandler = (e, id) => {
    e.preventDefault()
    console.log(id)
  }

  return (
    <>
      <form>
        <input type="text" value={message.text} onChange={changeHandler} />
        {editinglists.isEditing ? (
          <button onClick={(e) => editHandler(e)}>Edit</button>
        ) : (
          <button onClick={addHandler}>Add</button>
        )}

        <hr />
        {lists.length === 0 && <h2>No lists</h2>}
        {lists.map((eachItems) => {
          const { text, id } = eachItems
          return (
            <div key={id}>
              <p>{text}</p>
              <button onClick={(e) => deleteHandler(e, id)}>Delete</button>
              <button onClick={(e) => editHandler(e, id)}>Edit</button>
            </div>
          )
        })}
      </form>
    </>
  )
}

export default Index2
