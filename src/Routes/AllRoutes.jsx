import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import { PrivateRoute } from './PrivateRoute'
import { Details } from '../components/Details'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/video' element={<PrivateRoute><Details/></PrivateRoute>} />
        </Routes>
    </div>
  )
}
