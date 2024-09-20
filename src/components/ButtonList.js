import React from 'react'
import Button from './Button'



const ButtonList = () => {
  return (
    
    <div className='flex max-w-screen-xl p-2 space-x-4 overflow-x-auto whitespace-nowrap lg:w-full'>
    
    
      <Button name={"All"} className="flex-shrink-0"></Button>
      <Button name={"Gaming"} className="shrink-0"></Button>
      <Button name={"Songs"} className="shrink-0"></Button>
      <Button name={"Live"} className="shrink-0"></Button>
      <Button name={"Soccer"} className="shrink-0"></Button>
      <Button name={"Cooking"} className="shrink-0"></Button>
      <Button name={"T-Series"} className="shrink-0"></Button>
      <Button name={"Mixes"} className="shrink-0"></Button>
      <Button name={"Valentine"} className="shrink-0"></Button>
      <Button name={"Kapil Sharma"} className="shrink-0"></Button>
      <Button name={"Computer Programming"} className="shrink-0"></Button>
      <Button name={"Data Structure"} className="shrink-0"></Button>
      <Button name={"Cricket"} className="shrink-0"></Button>
    
    
    </div>
   
    
  )
}

export default ButtonList