import React from "react"

function A() {
  const parent = "Parent Data"
  return (
    <>
      A - component
      <br />
      <B parent={parent} />
    </>
  )
}

function B({ parent }) {
  return (
    <>
      B - component
      <br />
      <C parent={parent} />
    </>
  )
}

function C({ parent }) {
  return (
    <>
      C - component
      <br />
      <D parent={parent} />
    </>
  )
}

function D({ parent }) {
  return <>D - component = received :{parent}</>
}
export default A
