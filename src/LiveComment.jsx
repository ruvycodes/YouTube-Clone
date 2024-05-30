import React, { useRef, useState } from 'react'
import LiveChat from './LiveChat'
import { useDispatch } from 'react-redux';
import { addMessages } from './Utils/liveChatSlice';

const LiveComment = () => {

  let dispatch = useDispatch()
  const [showLiveChat, setShowLiveChat] = useState(false);
  const userMsg = useRef()

  const handleLiveChatDisplay = () => {
    setShowLiveChat(!showLiveChat);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addMessages({
      name: "User",
      messages: userMsg.current.value
    }))
    userMsg.current.value = ""
  }


  return (
    <>
      <div className='flex justify-center pb-2'>
        <button className='bg-slate-400 p-2' onClick={handleLiveChatDisplay}>Live Chat</button>
      </div>
      {<div className={`${showLiveChat ? 'inline' : 'invisible'}`}> {/*setting visibility to be hidden is not the greates idea as it is just invisible but its present in the dom and being rendered/processed in the background*/}
        <div className='bg-slate-200 h-[500px] w-72 overflow-y-scroll relative no-scrollbar'><LiveChat /></div>
        <form className='p-2 bg-slate-500' onSubmit={handleSubmit}>
          <input type="text" ref={userMsg} className='px-5 py-1 rounded-lg focus:outline-none' />
          <button type='submit' className='text-xs ml-4'>Send</button>
        </form>
      </div>}
    </>
  )
}

export default LiveComment