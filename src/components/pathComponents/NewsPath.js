import React from "react"

const NewsPath = ({link, title, hrefLink}) => {
    return (
        <div className="w-full">
            <p className="text-sm">
                {link.length>30 ? link.substring(0,30)+'...' : link}
            </p>
            <p className='text-lg hover:underline hover:cursor-pointer dark:text-blue-300 text-blue-700'>
                <a href={link} target="_blank" rel='noreferrer'>{title}</a>
            </p>
            <div className="flex gap-4">
                <a href={hrefLink} target="_blank" rel="noreferrer" className="text-gray-500/90 dark:text-gray-100/80 text-xs">{hrefLink}</a>
            </div>
        </div>
    )
}

export default NewsPath;