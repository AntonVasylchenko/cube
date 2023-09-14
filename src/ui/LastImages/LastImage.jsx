import React from 'react'
import "./lastImage.css"

const LastImage = React.memo(({ images, handlerImage, removeImages }) => {
  console.count("Render Last image")
  if (images.length === 0) return;
  return (
    <div className='last-images'>
      {images.map(el => {
        return (
          <div key={el} className='last-images__item'>
            <div onClick={() => removeImages(el)} className="last-images__remove">X</div>
            <img onClick={() => handlerImage(el)} src={el} alt="Images" loading='lazy' />
          </div>
        )
      })}
    </div>
  )
})

export default LastImage