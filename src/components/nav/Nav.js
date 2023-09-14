import React from 'react'
import "./nav.css"
import { arraySide } from '../../constants/constants'

const Nav = React.memo(({ handlerFace }) => {
  console.count("Render nav")

  const htmlLabels = arraySide.map(el => {
    return (
      <p className='radio-item' key={el}>
        <label htmlFor={`side-${el}`} >{el}</label>
        <input onChange={handlerFace} type="radio" id={`side-${el}`} name="rotate-cube-side" value={el} />
      </p>
    )
  })

  return (
    <>
      <h1 className='radio-title'>Select side</h1>
      <div className="radio-group">
        {htmlLabels}
      </div>
    </>
  )
})

export default Nav