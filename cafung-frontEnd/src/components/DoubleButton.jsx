import React from 'react'

function DoubleButton(props) {
    const { handleButton1, handleButton2, buttonTitle1, buttonTitle2, bg1 = "bg-blue-700", bg2="bg-red-700" } = props
  return (
    <div className='flex space-x-2 mt-4'>
        <button onClick={handleButton1} className={`px-2 text-center w-fit h-auto rounded-md text-white font-semibold ${bg1}`}>{buttonTitle1}</button>
        <button onClick={handleButton2} className={`px-2 text-center w-fit h-auto rounded-md text-white font-semibold ${bg2}`}>{buttonTitle2}</button>
    </div>
  )
}

export default DoubleButton