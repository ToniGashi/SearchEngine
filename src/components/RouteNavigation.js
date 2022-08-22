import React from "react"
import {NavLink} from "react-router-dom"
const RouteNavigation = () => { //search, image, video, news
    const Routes = [
        {
            path: '/search',
            label: 'Search'
        },
        {
            path: '/image',
            label: 'Images'
        },
        {
            path: '/video',
            label: 'Videos'
        },
        {
            path: '/news',
            label: 'News'
        }
    ]
    return (
        <div className="flex sm:justify-around justify-between items-center mt-4">
            {Routes.map(({path, label}, idx) => (
                <div key={idx} >
                    <NavLink to={path} className={({isActive}) => (isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2 m-2 mb-0' : 'm-2 mb-0')}>
                        {label}
                    </NavLink>
                </div>
            ))}
        </div>
        
    )
        
}

export default RouteNavigation;