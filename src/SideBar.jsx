import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

    let showHamMenu = useSelector((store) => store.app.showHamMenu)

    if (!showHamMenu) { return null } // early return or simply return null if showHamMenu is false

    // return this html if showHamMenu is true
    return (
        <div className='bg-pink-400 w-1/6 mt-4'>
            <div className='mx-5 p-2'>
                <h1 className='font-bold'>Explore</h1>
                <ul className='mx-2 p-2'>
                    <li>Trending</li>
                    <li>Gaming</li>
                    <li>Live</li>
                    <li>News</li>
                    <li>Movies</li>
                    <li>Sports</li>
                    <li>Fashion</li>

                </ul>
            </div>

            <div className='mx-5 p-2'>
                <h1 className='font-bold'>You</h1>
                <ul className='mx-2 p-2'>
                    <li>Liked Videos</li>
                    <li>Subscriptions</li>
                    <li>Watch History</li>
                    <li>Watch Later</li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar