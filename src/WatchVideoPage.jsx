import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { closeHamBurgMenu } from './Utils/appSlice'

const WatchVideoPage = () => {

    let dispatch = useDispatch()

    //useEffect is used so it triggers after the component renders
    useEffect(() => {
        dispatch(closeHamBurgMenu())
    }, [])


    let { vid } = useParams()
    console.log(vid);

    return (
        <div><iframe className='mx-12 my-5' width="800" height="400" src={`https://www.youtube.com/embed/${vid}?si=e_X-oJtXR3eJZqZR`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
    )
}

export default WatchVideoPage