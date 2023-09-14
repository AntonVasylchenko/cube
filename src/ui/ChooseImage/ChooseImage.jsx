import React from 'react'
import "./chooseimage.css"

const ChooseImage = () => {
  return (
    <div className='choose-image'>
      <svg width="30" height="30" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1236_17098)">
          <path d="M1.5 13.5L12.5 13.5C13.0523 13.5 13.5 13.0523 13.5 12.5L13.5 1.5C13.5 0.947715 13.0523 0.5 12.5 0.5L1.5 0.5C0.947715 0.5 0.5 0.947715 0.5 1.5L0.5 12.5C0.5 13.0523 0.947715 13.5 1.5 13.5Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M0.5 11H13.5" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.84 11L9.05 6.11996C9.13984 6.04513 9.25307 6.00415 9.37 6.00415C9.48692 6.00415 9.60015 6.04513 9.69 6.11996L13.5 8.84996" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.5 6C5.32843 6 6 5.32843 6 4.5C6 3.67157 5.32843 3 4.5 3C3.67157 3 3 3.67157 3 4.5C3 5.32843 3.67157 6 4.5 6Z" stroke="#000001" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1236_17098">
            <rect width="14" height="14" fill="white" />
          </clipPath>
        </defs>
      </svg>

      <p>Choose image</p>
    </div>
  )
}

export default ChooseImage