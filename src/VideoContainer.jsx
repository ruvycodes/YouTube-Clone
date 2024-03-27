import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from './Utils/constants'
import VideoCard from './VideoCard'
import { useDispatch } from 'react-redux'
import { openHamBurgMenu } from './Utils/appSlice'

const VideoContainer = () => {

    const [videoData, setVideoData] = useState(null)
    let dispatch = useDispatch()

    //this is used so the sidebar pops up when the user goes back to home page
    useEffect(() => {
        dispatch(openHamBurgMenu())
    }, [])

    async function fetchVideo() {
        let raw = await fetch(YOUTUBE_API)
        let data = await raw.json()
        setVideoData(data.items)
        console.log(data);
    }

    useEffect(() => {
        fetchVideo()
    }, [])

    if (videoData == null) { return } // return if videoData is not present , or add some shimmer/loader

    return (
        <div className=' flex flex-wrap ml-5'>
            {videoData.map((video) => <VideoCard key={video.id} items={video} />)}
        </div>
    )
}

export default VideoContainer