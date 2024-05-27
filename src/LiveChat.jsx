import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages, removeMessages } from './Utils/liveChatSlice';
import { generateRandomComments, generateRandomNames } from './Utils/helper';
import { LIVE_CHAT_LIMIT, USER_PROFILE } from './Utils/constants';

const LiveChat = () => {

  const chatMessageArray = useSelector((store)=>store.liveChat.messages);
  const dispatch = useDispatch();

    useEffect(()=> {
      let i = setInterval(()=> {
        //SIMULATED API POLLING 
        //We have used our own coded functions for comments and names but api polling is used here in case of youtube or some other similar app , it will dispatch an action everytime after the specified interval
        dispatch(addMessages( {
          name : generateRandomNames(),
          messages: generateRandomComments()
        }    
        ))
      } , 2000)
      
      return ()=>clearInterval(i) //clear interval after component dismounts

    } , [])

    //Remove the element from 0th index (top of chatbox) after the limit is exceeded , we can also use LRU cache in this
    if(chatMessageArray.length>LIVE_CHAT_LIMIT) {
      dispatch(removeMessages())
    }

  return ( 

      <div className='text-left mx-1 px-2'>
        {
          chatMessageArray.map((c , index)=>(
            <div key={index}>
            <div className='flex absolute py-[22px] items-center'>
            <img className='w-4 mx-[6px]' src={USER_PROFILE} alt="" />
            <span className='font-semibold text-xs'>{c.name}</span>
          </div>
          <div className='w-[275px] pt-[22px] text-xs'>
          <span className='px-[68px]'>{c.messages}</span>
          </div>
          </div>
          ))
        } 
     
     </div>
  
  )
}

export default LiveChat