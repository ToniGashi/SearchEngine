import React, { useEffect} from 'react'
import { useResultContext } from '../context/ResultContextProvider';

export const Search = () => {
    const { setSearchTerm, searchTerm } = useResultContext()

    useEffect(() => {
        const inputField = document.getElementById('searchInput');
        inputField.value = searchTerm;
    })
    
    const handleSearchButtonClick = () => {
        const input = document.getElementById('searchInput').value;
        setSearchTerm(()=>input)
    }

    const handleKeypress = (e) => {
        if(e.charCode === 13) {
            handleSearchButtonClick()
        }
    }

    return (
        <div className="flex justify-center">
            <input id="searchInput" onKeyPress={handleKeypress} placeholder='Quick search ...' className='min-w-fit w-3/5 h-12 text-sm leading-6 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:text-gray-100 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'></input>
            <button onClick={handleSearchButtonClick}>🔍</button>
        </div>
    )
}