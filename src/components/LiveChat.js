import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice";
import { generate, makeid } from "../utils/helper";


const LiveChat = () => {
const [Livemessage,setLivemessage]=useState();

  const dispatch=useDispatch();
 const chatMessages=useSelector((store)=>store.chat.messages);
  useEffect(()=>{
    const i=setInterval(()=>{
      

dispatch(
  addMessage({
    name:generate(),
    message:makeid(30) ,
  })
);

    },2000)

    return ()=>clearInterval(i);
  },[])


  return (
    <>
    <div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
        {chatMessages.map((c,index)=>(<ChatMessage key={index} name={c.name} message={c.message}/>))}
        </div>
        </div>

        <form className="w-full p-2 ml-2 border border-black rounded-md" onSubmit={(e)=>{
          e.preventDefault();
          console.log("onsubmit",Livemessage)
          dispatch(addMessage({
            name:"Priyanka Gupta",
            message:Livemessage,
          }))
        }}>
          <input className="p-2 w-96"
          type="text" value={Livemessage} onChange={(e)=>setLivemessage(e.target.value)}  />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
        </>
  )
}

export default LiveChat