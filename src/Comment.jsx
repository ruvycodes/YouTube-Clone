import React from 'react'

const Comment = ({data}) => {
  return (
    <div className='flex bg-gray-300 p-2'>
        <img className='w-10 h-10 rounded-full' src="https://imgs.search.brave.com/4JANzLunczhS5CLLq9awVuGcZ6AeGxpCeKtcD1Tcggg/rs:fit:860:0:0/g:ce/aHR0cDovL20uZ2V0/dHl3YWxscGFwZXJz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMy8wNy9QZnAt/UnlvbWVuLVN1a3Vu/YS5qcGc" alt="" />
        <div className='flex flex-col ml-4'>
            <span className='font-semibold'>{data.name}</span>
            <span className='text-sm max-w-[47rem]'>{data.message}</span>
        </div>
    </div>
  )
}


export default Comment