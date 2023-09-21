import React, { useState } from "react"

//input value sending

// function State() {
//   const [value, setValue] = useState("")

//   const changeHandler = (event) => {
//     setValue(event.target.value)
//   }

//   return (
//     <div>
//       <input type="text" value={value} onChange={changeHandler} />
//       {value}
//     </div>
//   )
// }

// export default State

//visiblity coding

// function State() {
//   const [visible, setVisible] = useState(false)

//   const togglevisible = () => {
//     setVisible(!visible)
//   }

//   return (
//     <div>
//       <button onClick={togglevisible}>
//         {visible ? "hide Element" : "show element"}
//       </button>

//       {visible && <p>This element is now visible</p>}
//     </div>
//   )
// }

// export default State

//form data

function State() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const changeHander = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Name", form.name)
    console.log("Email", form.email)
    console.log("Phone", form.phone)
    console.log("Message", form.message)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={changeHander}
        />
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={changeHander}
        />
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={changeHander}
        />
        <input
          type="text"
          name="message"
          value={form.message}
          onChange={changeHander}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default State
