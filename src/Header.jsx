import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleHamBurgMenu } from './Utils/appSlice'
import { Link } from 'react-router-dom'
import { HAMBURGER_MENU, USER_PROFILE, YOUTUBE_LOGO } from './Utils/constants'
import SearchBar from './SearchBar'

const Header = () => {

    let dispatch = useDispatch()

    const handleMenuClick = () => {
        dispatch(toggleHamBurgMenu())
    }

    return (
        <div className='flex justify-between shadow-lg py-1'>
            <div className='flex -my-6 ml-5'>
                < img onClick={handleMenuClick} className='w-7 cursor-pointer' src={HAMBURGER_MENU} alt="" />
                <Link to="/"><img className='w-40 p-2' src={YOUTUBE_LOGO} alt="logo" /></Link>
            </div >

            <SearchBar />

            <img className='w-8 mr-5' src={USER_PROFILE} alt="" />
        </div >
    )
}

export default Header