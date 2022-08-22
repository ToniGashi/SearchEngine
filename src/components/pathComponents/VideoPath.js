import React from "react"
import ReactPlayer from 'react-player/lazy';

const VideoPath = ({link, title}) => {
    return (
        <div className="p-2">
            <p className="text-sm">
                {link?.length>30 ? link.substring(0,30)+'...' : link}
            </p>
            {link && <ReactPlayer url={link} controls width='335px' height='200px' config={{youtube: {playerVars: {origin: 'https://www.youtube.com'}}}}/>}
            <p className='text-lg hover:underline hover:cursor-pointer dark:text-blue-300 text-blue-700'>
                <a href={link} target="_blank" rel='noreferrer'>{title.length>30 ? title.substring(0,30)+'...' : title}</a>
            </p>
        </div>
    )
}

export default VideoPath;