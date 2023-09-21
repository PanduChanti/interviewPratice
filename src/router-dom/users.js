import React from "react"
import json from "./json"
import { Link } from "react-router-dom"

function users() {
  return (
    <div>
      {json.map((eachuser) => {
        return (
          <>
            <Link to={`/users/${eachuser.id}`} key={eachuser.id}>
              <article>
                <h2>{eachuser.name}</h2>
                <p>{eachuser.email}</p>
              </article>
            </Link>
          </>
        )
      })}
    </div>
  )
}

export default users
