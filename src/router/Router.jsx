import React from 'react'
import { Routes, Route } from "react-router";
import Homepage from '../pages/HomePage/Homepage';
import SignupPage from '../pages/SignupPage/SignupPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import NoPage from '../pages/NoPage/NoPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/login' element={< LoginPage />} />
            <Route path='/settings' element={< SettingsPage />} />
            <Route path='/profile' element={< ProfilePage />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
    )
}

export default Router
