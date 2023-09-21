import React, { useEffect, useState } from "react"

const url =
  "https://youtube-search-results.p.rapidapi.com/youtube-search/?q=javascript"

function Youtube() {
  const [datas, setData] = useState([])

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "faa3921eb3mshba3d2b43212cb74p157dfcjsn493793709c93",
      "X-RapidAPI-Host": "youtube-search-results.p.rapidapi.com",
    },
  }

  const FetchData = async () => {
    try {
      const response = await fetch(url, options)
      const result = await response.json()
      setData(result.items)
      console.log()
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    FetchData(url)
  }, [])
  return (
    <div>
      <form>
        <input type="text" />
        <input type="button" value="Search" />
      </form>
      {/* {datas.map((EachVideo) => {
        return (
          <>
            <div className="card">
              <div className="card-title">
                <h3 key={EachVideo.id}>{EachVideo.title}</h3>
              </div>
              <div className="card-img">
                <img src={EachVideo.bestThumbnail} alt="" />
              </div>
              <div className="card-content">
                <video src={EachVideo.url}></video>
              </div>
            </div>
          </>
        )
      })} */}
    </div>
  )
}

export default Youtube
