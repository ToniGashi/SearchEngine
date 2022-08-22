import React from "react"

const ImagePath = ({href, alt, src, title}) => {
    return (
        <a href={href} target='_blank' rel='noreferrer' className='sm:p-3 p-5'>
            {console.log(title.substring(0,5))}
            <img src={src} alt={alt} loading='lazy'></img>
            <p>{title.length>10 ? title.substring(0,10) : title}</p>
        </a>
    )
}

export default ImagePath;