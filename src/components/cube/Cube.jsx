import React from 'react'
import "./cube.css"
import { ChooseImage } from '../../ui';


const Cube = ({ face, side, handlerShow }) => {
  console.count("Render cube");
  const { front, back, left, right } = side;
  
  
  const handlerPosition = (event) => {
    console.log(event.targetTouches);
  }



  return (
    <div className="scene" onTouchMove={handlerPosition}>
      <div className={`cube show-${face}`} >
        <div onClick={handlerShow} className="cube__face cube__face--front">
          {front
            ? <img src={front} alt='Front face' />
            : <ChooseImage />
          }
        </div>
        <div onClick={handlerShow} className="cube__face cube__face--back">
          {back
            ? <img src={back} alt='Front back' />
            : <ChooseImage />
          }
        </div>
        <div onClick={handlerShow} className="cube__face cube__face--right">
          {right
            ? <img src={right} alt='Front right' />
            : <ChooseImage />
          }
        </div>
        <div onClick={handlerShow} className="cube__face cube__face--left">
          {left
            ? <img src={left} alt='Front left' />
            : <ChooseImage />
          }
        </div>
        <div className="cube__face cube__face--top">
          <div className="cube__line-ver"></div>
          <div className="cube__line-hor"></div>
        </div>
        <div className="cube__face cube__face--bottom">
          <div className="cube__line-ver"></div>
          <div className="cube__line-hor"></div>
        </div>
      </div>
    </div>
  )
}

export default Cube