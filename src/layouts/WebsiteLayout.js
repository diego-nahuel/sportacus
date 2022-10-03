import React from 'react';
import Home from '../pages/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import UnderConstruction from '../pages/UnderConstruction';
import Productos from '../pages/Productos';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
import Alquileres from '../pages/Alquileres';
import Contacto from '../pages/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function WebsiteLayout() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <HeaderBar />
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
                <Footer />
            </BrowserRouter>
        </>
    )
}
