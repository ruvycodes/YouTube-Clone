import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessages } from './Utils/liveChatSlice';
import { generateRandomComments, generateRandomNames } from './Utils/helper';
import { USER_PROFILE } from './Utils/constants';

const LiveChat = () => {

  const chatMessageArray = useSelector((store)=>store.liveChat.messages);
  const dispatch = useDispatch();

    useEffect(()=> {
      let i = setInterval(()=> {
        //API POLLING
        dispatch(addMessages( {
          name : generateRandomNames(),
          messages: generateRandomComments()
        }    
        ))
      } , 2000)

      return ()=>clearInterval(i)

    } , [])



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