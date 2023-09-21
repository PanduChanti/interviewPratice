import { useState, useEffect } from "react"

function useCustom(URL) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchcall = async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await fetch(URL)
      const comingData = await response.json()
      setData(comingData)
      setLoading(false)
      setError(false)
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchcall(URL)
  }, [])

  return [data, loading, error]
}

export default useCustom
