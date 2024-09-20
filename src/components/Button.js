import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className="flex px-6 py-2 m-1 text-sm bg-gray-200 rounded-lg sm:text-base md:text-lg lg:text-xl sm:w-">{name}</button>
    </div>
  )
}

export default Button