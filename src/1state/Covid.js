import React, { useEffect, useState } from "react"

//https://data.covid19india.org/data.json

function Covid() {
  const [data, setData] = useState("")
  useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((res) => setData(res.statewise))
      .then((res) => console.log(res.statewise))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      <center>
        <h1>Covid-19 Data</h1>
        <table className="table">
          <thead className="thead-danger">
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>LastUpdate</th>
          </thead>
          <tbody>
            {data &&
              data.map((item) => {
                return (
                  <tr>
                    <td>{item.state || item.state}</td>
                    <td>{item.confirmed || item.confirmed}</td>
                    <td>{item.recovered || item.recovered}</td>
                    <td>{item.deaths || item.deaths}</td>
                    <td>{item.active || item.active}</td>
                    <td>{item.lastupdatedtime || item.lastupdatedtime}</td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default Covid
