import React from 'react'

const OrangeButton = ( {title, ...props  }    ) => {
  return (
    <div   { ...props } className=' hover:cursor-pointer  hover:to-orange-700 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm w-fit h-10 flex items-center px-3 py-2 rounded-2xl  ' >
     {title}    
    </div>
  )
}

export default OrangeButton;
