import React, {createContext, useContext, useState}  from "react";

const RESULT_CONTEXT = createContext();

const BASE_URL = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}${type}`,{
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
            },
            method: 'GET'
        })
        
        const data = await response.json();
        
        setResults(data);
        setIsLoading(false);
    }

    return (
        <RESULT_CONTEXT.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading, setIsLoading}}>
            {children}
        </RESULT_CONTEXT.Provider>
    )
}

export const useResultContext = () => useContext(RESULT_CONTEXT)