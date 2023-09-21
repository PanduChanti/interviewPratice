import React from "react"
import { useParams } from "react-router-dom"
import json from "./json"

function UserDetails() {
  const { userId } = useParams()

  const findPerson = json.find((finding) => finding.id === userId)

  return (
    <div>
      <h1>{findPerson.website}</h1>
      <h4>{findPerson.username}</h4>
      <p>{findPerson.email}</p>
    </div>
  )
}

export default UserDetails
