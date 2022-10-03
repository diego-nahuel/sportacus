import React from 'react';
import Home from '../pages/Home';
import Productos from '../pages/Productos';
import UnderConstruction from '../pages/UnderConstruction';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Alquileres from '../pages/Alquileres';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from '../pages/Contacto';

export default function WebsiteLayout(props) {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<UnderConstruction />} />
                    <Route path='/productos' element={<Productos />} />
                    <Route path='/alquileres' element={<Alquileres />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/auth/profile' element={<Profile />} />
                    <Route path='/auth/signin' element={<SignIn />} />
                    <Route path='/auth/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
