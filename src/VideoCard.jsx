import React from 'react'

const VideoCard = () => {
    return (
        <div className='mx-8 py-2 my-2'>
            <img className='w-[15rem]' src="https://i.ytimg.com/vi/7JDeBPuFQS0/sddefault.jpg" alt="" />
            <div className='flex flex-col'>
                <span className='w-64 py-2'>"Watch: Baltimore Bridge Collapses After It Was Hit by Ship | WSJ News"</span>
                <span>WSJ News</span>
                <span>599641</span>
            </div>
        </div>
    )
}

export default VideoCard