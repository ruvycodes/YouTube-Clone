import React from 'react'
import TagList from './TagList'
import VideoContainer from './VideoContainer'

const Body = () => {
    return (
        <div className='flex overflow-x-auto flex-col'>
            <TagList />
            <div >
                <VideoContainer />
            </div>
        </div>
    )
}

export default Body