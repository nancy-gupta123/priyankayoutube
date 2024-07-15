import { useState } from "react"


const Demo = () => {
    const [isDarkTheme,setisDarkTheme]=useState(false)
  return (
    <div className={`h-96 w-96 ${isDarkTheme ? 'bg-slate-700 text-white':'bg-slate-100 text-black'}`}>
      <div>
        <button className="px-5 py-2 text-white bg-green-500" onClick={()=>
           setisDarkTheme(!isDarkTheme) 
        }>Toggle</button>
      </div>
      color
    </div>
  )
}

export default Demo