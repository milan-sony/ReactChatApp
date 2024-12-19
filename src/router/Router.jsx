import React from 'react'
import { Routes, Route, Navigate } from "react-router";
import Homepage from '../pages/HomePage/Homepage';
import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import NoPage from '../pages/NoPage/NoPage';
import { userAuthStore } from '../store/userAuthStore';

function Router() {

    const { authUser } = userAuthStore()

    return (
        <Routes>
            <Route path='/' element={authUser ? <Homepage /> : <Navigate to="/login" />} />
            <Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to="/" />} />
            <Route path='/login' element={!authUser ? < LoginPage /> : <Navigate to="/" />} />
            <Route path='/settings' element={< SettingsPage />} />
            <Route path='/profile' element={authUser ? < ProfilePage /> : <Navigate to="/login" />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}

export default Router
