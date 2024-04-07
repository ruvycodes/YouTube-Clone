import React, { useEffect, useRef, useState } from 'react'
import { YT_SEARCH_SUGGESTIONS } from './Utils/constants';

const SearchBar = () => {
    const [inputQuery, setInputQuery] = useState(null);

    const query = useRef();

    const handleInputQuery = () => {
        setInputQuery(query.current.value)
    }


    const suggestResults = async () => {
        let raw = await fetch(YT_SEARCH_SUGGESTIONS + inputQuery + "&xhr=t&xssi=t&gl=us")
        let data = await raw.text(); // the response is not json so convert it into text
        let string = data.substring(data.indexOf('[')); // to remove the extra charachters at the start of the response , we only take the substring which starts with the first occurence of '[' which means start of our needed data 
        let json = JSON.parse(string); // parse the string to get the json object
        console.log(json);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            suggestResults()
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [inputQuery])

    return (
        <div className='flex items-center mr-24'>
            <input className='border border-gray-500 py-2 px-5 w-[30rem] rounded-l-full' ref={query} onChange={handleInputQuery} type="text" name="" id="" />
            <button className='border border-gray-500 py-2 px-3 rounded-r-full'>Search</button>
        </div>
    )
}

export default SearchBar