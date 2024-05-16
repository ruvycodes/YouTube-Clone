import React, { useEffect, useRef, useState } from 'react'
import { YT_SEARCH_SUGGESTIONS } from './Utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { cacheResults } from './Utils/cacheSlice';

const SearchBar = () => {
    const [inputQuery, setInputQuery] = useState("");
    const [suggestedQuery , setSuggestedQuery] = useState(null);
    const [flag , setFlag] = useState(false); // to toggle the suggestion query container (suggestion box)
    const query = useRef();
    const dispatch = useDispatch();
    const searchCache = useSelector((store)=>store.cache.cacheStore);

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
        dispatch(cacheResults({
            [inputQuery] : json[1] // dispatch cacheResults action to update the cache store with the fetched json
        }
        ))
        console.log(json);
    }
    
    // simple debouncing
    useEffect(() => {
        let timer = setTimeout(() => {
            //if the inputQuery exists in the cache then dont call the suggestion function , update the suggestedQuery with the cached data instead so we can see suggestion result without making an extra request through the api
            if(searchCache[inputQuery]) {
                setSuggestedQuery(searchCache[inputQuery]);
            }
            else {
                suggestResults(); // or else call the suggestion function and also update our cache (cache updation is happening in the suggestResults function)
            }
        }, 300)

        return () => {
            clearTimeout(timer) // we clean up the previous callback registered by setTimeout when the component unmounts
        }
    }, [inputQuery])

    return (
        <div>
        <div className='flex items-center mr-24 mt-3'>
            <input className='border border-gray-500 py-2 px-5 w-[30rem] rounded-l-full focus:outline-none' ref={query} onChange={handleInputQuery} onFocus={handleInputFocus} onBlur={handleInputBlur} type="text" name="" id="" />
            <button className='border border-gray-500 py-2 px-3 rounded-r-full'>Search</button>
        </div>

        {suggestedQuery&&<div className={`ml-4 w-[29rem] bg-white border border-r-black border-l-black border-b-black h-[31rem] ${flag ? "flex" : "hidden"} flex-col absolute rounded-sm`}>
            {suggestedQuery.map((query)=> <span key={query} className='text-black text-lg mx-2 mt-1  px-5 py-1'>{query[0]}</span>)}
        </div>}
        </div>
    )
}

export default SearchBar