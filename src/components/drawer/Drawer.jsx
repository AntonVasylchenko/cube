import React from 'react'
import "./drawer.css"
import { LastImage as LastImageComponent } from '../../ui';

const Drawer = React.memo(({ setSide, side, face, show, handlerShow }) => {
  console.count("Render drawer");

  const [lastImage, setLastImage] = React.useState([]);

  const handelerFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file)
    reader.onload = () => {
      setSide({ ...side, [face]: reader.result })
      if (!lastImage.includes(reader.result)) {
        setLastImage(prev => [...prev, reader.result])
      }
    }
    reader.onerror = () => {
      console.log("error")
    }
  }

  const handlerImage = (result) => {
    setSide({ ...side, [face]: result })
  }

  const removeImages = React.useCallback( (result) => {
    setLastImage(prev => prev.filter( el => el !== result))
  },[])

  return (
    <div className={`drawer ${show ? "active" : ''}`}>
      <div className='drawer-overlay' onClick={handlerShow}></div>
      <div className='drawer-inner'>
        <div className='drawer-inner__close' onClick={handlerShow}>X</div>
        <div className='drawer-inner__input'>
          <label htmlFor='inner-file'>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
              <g clipPath="url(#clip0_1236_1274)">
                <path d="M0.5 10.5V11.5C0.5 12.0304 0.710714 12.5391 1.08579 12.9142C1.46086 13.2893 1.96957 13.5 2.5 13.5H11.5C12.0304 13.5 12.5391 13.2893 12.9142 12.9142C13.2893 12.5391 13.5 12.0304 13.5 11.5V10.5" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 4L7 0.5L10 4" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 0.5V9.5" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1236_1274">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span>upload an image</span>
          </label>
          <input id='inner-file' type="file" onChange={handelerFile} name="file" accept=".jpg,.jpeg,.png" />
        </div>
        <LastImageComponent images={lastImage} handlerImage={handlerImage} removeImages={removeImages}/>
      </div>
    </div>
  )
})

export default Drawer