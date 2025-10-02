import { useEffect, useState } from "react"
import { FaUserCircle } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../utils/chatSlice"
import { generateRandomName, generateRandomString } from "../utils/nameGenerator"

const LiveChat = ({ name, message }) => {
  const dispatch = useDispatch()
  const chatMessages = useSelector(store => store.chat.messages)

  useEffect(() => {
    const set = setInterval(() => {
      // console.log("testing")
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomString(20)
      }))
    }, 2000);
    return () => clearInterval(set)
  }, [])
  const [liveMessage, setLiveMessage] = useState("")
  return (<>
    <div className='border-2 border-gray-300 w-96 h-[68vh]  ml-2 mr-2 rounded-xl'>
      <h1 className="ml-3 mt-2 font-bold ">
        Live Chat
      </h1>

      <div className="h-[55vh] overflow-y-auto flex flex-col-reverse">
        {chatMessages.map((msg, index) => (
          <div key={index}>
            <div className="flex gap-3 ml-3 mt-2 items-center">
              <FaUserCircle className="text-2xl" />
              <span className="font-semibold">{msg.name}</span>
            </div>
            <span className="ml-12">{msg.message}</span>
          </div>
        ))}

      </div>
      <form className="absolute ml-4 bottom-44"
        onSubmit={(e) => {
          e.preventDefault()
          setLiveMessage("")
          dispatch(addMessage({
            name : "Seyd Ahad",
            message : liveMessage
          }))
        }}>
        <input type="text" placeholder="Type your message" value={liveMessage} className="border-2 border-gray-300 rounded-2xl w-64 h-7 mr-2 bg-white pl-2 shadow"
          onChange={(e) => { setLiveMessage(e.target.value) }} />
        <button className="border-2 border-black w-20 rounded-2xl h-8 bg-[#f03] text-white hover:bg-red-500"
        >Sumbit</button>
      </form>
    </div>

  </>
  )
}

export default LiveChat
