import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = ({ items }) => {

    const { snippet, statistics } = items;
    const { thumbnails, channelTitle, title } = snippet

    return (
        <div className='ml-5 py-2 my-2 bg-slate-200 rounded-lg'>
            <Link to={"watch/" + items.id}><img className='w-[19rem] p-2' src={thumbnails?.standard?.url} alt="thumbnail" /></Link>
            <div className='flex flex-col p-2'>
                <span className='w-64 py-2 font-bold'>{title}</span>
                <span>{channelTitle}</span>
                <span>{statistics?.viewCount}</span>
            </div>
        </div>
    )
}

export default VideoCard