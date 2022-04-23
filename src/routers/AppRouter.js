import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashBoardRoutes } from './DashBoardRoutes'

export const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element={<DashBoardRoutes/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}
