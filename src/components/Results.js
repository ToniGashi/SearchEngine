import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from '../context/ResultContextProvider';
import { Loading } from './Loading';
import SearchPath from './pathComponents/SearchPath';
import ImagePath from './pathComponents/ImagePath';
import VideoPath from './pathComponents/VideoPath';
import NewsPath from './pathComponents/NewsPath';


const modifyString = (str) => str ? str.replace(' ', '+') : '';

export const Results = () => {
    const { results, isLoading, getResults, searchTerm, setIsLoading} = useResultContext()
    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            getResults(`${location.pathname}/q=${modifyString(searchTerm)}`);
        } else {
            setIsLoading(false);
        }
    }, [searchTerm, location.pathname])

    if(isLoading) return <Loading />

    switch (location.pathname) {
        case '/search':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-5'>
                    {results?.results?.map ? 
                        results.results.map(({link, description, title}, index) => {
                            return ( // We will not delete or edit the items in here so we can use index as key
                                <SearchPath key={index} link={link} description={description} title={title}/> 
                            )
                        }) 
                    : []}
                </div>
            )
        case '/news':
            return (
                <div className='flex flex-wrap justify-between space-y-6 sm:px-5 items-center'>
                    {results?.entries?.map ? 
                        results.entries.map(({link, title, source: {href}}, index) => {
                            return ( // We will not delete or edit the items in here so we can use index as key
                                <NewsPath key={index} link={link} hrefLink={href} title={title}/> 
                            )
                        }) 
                    : []}
                </div>
            )
        case '/image':
            return (
                <div className='flex flex-wrap justify-center items-center'>
                    {results?.image_results?.map ? 
                        results.image_results.map(({image: {src, alt}, link: {href, title}}, index) => {
                            return ( // We will not delete or edit the items in here so we can use index as key
                                <ImagePath key={index} href={href} alt={alt} title={title} src={src} />
                            )
                        }) 
                    : []}
                </div>
            )
        case '/video':
            return (
                <div className='flex flex-wrap items-center'>
                    {results?.results?.map ? 
                        results.results.map(({additional_links, title, description}, index) => {
                            return ( // We will not delete or edit the items in here so we can use index as key
                                <VideoPath key={index} link={additional_links[0].href} title={title} description={description} />
                            )
                        }) 
                    : []}
                </div>
            )
        default:
            return 'ERROR!';
    }
}