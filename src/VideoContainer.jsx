import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './Utils/constants'
import VideoCard from './VideoCard'

const VideoContainer = () => {

    const [videoData, setVideoData] = useState(null)

    async function fetchVideo() {
        let raw = await fetch(YOUTUBE_API)
        let data = await raw.json()
        setVideoData(data.items)
        console.log(data);

    }

    useEffect(() => {
        fetchVideo()
    }, [])

    return (
        <div className='flex flex-wrap ml-5'>
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />
            <VideoCard />v

        </div>
    )
}

export default VideoContainer