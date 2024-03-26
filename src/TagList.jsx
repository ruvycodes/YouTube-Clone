import React from 'react'

const TagList = () => {

    let TagNames = ["Popular", "Gaming", "Cricket", "Comedy", "Live", "Bollywood Movies", "Programming", "Rap", "Music Production", "Health", "Sex Education", "Netflix", "Trailers", "Breaking News", "PlayStation", "Sony", "Wildlife", "VFX", "Anime"]
    return (
        <div className='overflow-x-scroll flex list '>
            {
                TagNames.map((tags) => <button key={tags} className='mx-2 whitespace-nowrap bg-slate-300 mt-5 mb-2 rounded-lg px-8 py-2'>{tags}</button>)
            }
        </div>
    )
}

export default TagList