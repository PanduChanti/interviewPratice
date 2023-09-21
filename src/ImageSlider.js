import React, { useEffect, useState } from "react"

function ImageSlider() {
  const [image, setImage] = useState([])
  const [Each, eachImage] = useState([])

  const ImageSliding = [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1682686580024-580519d4b2d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8Zmxvd2Vyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  ]

  const ImageLoader = () => {
    setImage(ImageSliding)
    eachImage(image.slice(0, 1))
  }

  useEffect(() => {
    ImageLoader()
  }, [])

  const NextSlider = () => {
    for (let i = 0; i < Math.ceil(image.length); i++) {
      eachImage(image.slice(1 + 1 - 1, 0 - 1))
    }
  }

  const PreSlider = () => {
    for (let i = 0; i < Math.ceil(image.length); i++) {
      eachImage(image.slice(image - 1, image))
    }
  }

  return (
    <div>
      {Each.map((EachImage) => {
        return <img src={EachImage} alt="flowers" />
      })}
      <button onClick={() => NextSlider()}>+</button>{" "}
      <button onClick={() => PreSlider()}>-</button>
    </div>
  )
}

export default ImageSlider
