import React from "react"

const SearchPath = ({link, title, description}) => {
    return (
            <div className="w-full">
                <p className="text-sm">
                    {link.length>30 ? link.substring(0,30)+'...' : link}
                </p>
                <p className='text-lg hover:underline hover:cursor-pointer dark:text-blue-300 text-blue-700'>
                    <a href={link} target="_blank" rel='noreferrer'>{title}</a>
                </p>
                <p className='text-xs text-gray-500/90 dark:text-gray-100/80'>{description.length>100 ? description.substring(0,100)+'...' : description}</p>
            </div>
    )
}

export default SearchPath;