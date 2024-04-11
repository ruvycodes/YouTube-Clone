import React, { useEffect, useRef, useState } from 'react'
import { YT_SEARCH_SUGGESTIONS } from './Utils/constants';

const SearchBar = () => {
    const [inputQuery, setInputQuery] = useState("");
    const [suggestedQuery , setSuggestedQuery] = useState(null);
    const [flag , setFlag] = useState(false) // to toggle the suggestion query container

    const query = useRef();

    const handleInputQuery = () => {
        setInputQuery(query.current.value)
    }

    const handleInputFocus = ()=>{
        setFlag(true);
    }

    const handleInputBlur = ()=> {
        setFlag(false);
    }

    const suggestResults = async () => {
        let raw = await fetch(YT_SEARCH_SUGGESTIONS + inputQuery + "&xhr=t&xssi=t&gl=us")
        let data = await raw.text(); // the response is not json so convert it into text
        let string = data.substring(data.indexOf('[')); // to remove the extra charachters at the start of the response , we only take the substring which starts with the first occurence of '[' which means start of our needed data 
        let json = JSON.parse(string); // parse the string to get the json object
        setSuggestedQuery(json[1])
        console.log(json);
    }

    // simple debouncing
    useEffect(() => {
        let timer = setTimeout(() => {
            suggestResults()
        }, 300)

        return () => {
            clearTimeout(timer) // we clean up the previous callback registered by setTimeout when the component unmounts
        }
    }, [inputQuery])

    return (
        <div>
        <div className='flex items-center mr-24'>
            <input className='border border-gray-500 py-2 px-5 w-[30rem] rounded-l-full focus:outline-none' ref={query} onChange={handleInputQuery} onFocus={handleInputFocus} onBlur={handleInputBlur} type="text" name="" id="" />
            <button className='border border-gray-500 py-2 px-3 rounded-r-full'>Search</button>
        </div>

        {suggestedQuery&&<div className={`ml-4 w-[29rem] bg-white border border-r-black border-l-black border-b-black h-[31rem] ${flag ? "flex" : "hidden"} flex-col absolute rounded-sm`}>
            {suggestedQuery.map((query)=> <span className='text-black text-lg mx-2 mt-1  px-5 py-1'>{query[0]}</span>)}
        </div>}
        </div>
    )
}

export default SearchBar