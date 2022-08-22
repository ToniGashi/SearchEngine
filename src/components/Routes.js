import React from 'react'
import {Routes as Switch, Route, Navigate} from 'react-router-dom'
import {Results} from './Results.js'

export const Routes = () => { //this takes a string prop
    return (
        <div className='p-4 dark:bg-gray-500'>
            <Switch>
                <Route path='/' element={<Navigate to="/search"/>}/>
                <Route path="/search" element={<Results/>}/>
                <Route path="/image" element={<Results/>}/>
                <Route path="/video" element={<Results/>}/>
                <Route path="/news" element={<Results/>}/>
            </Switch>
        </div>
    )
}