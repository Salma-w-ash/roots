import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginForm from '../forms/LoginForm'
import LoginPage from '../pages/LoginPage'

export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage/>}/>

          
        </Routes>
        </BrowserRouter>
    </div>
  )
}
