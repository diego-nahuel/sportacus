import React from 'react';
import Inicio from '../pages/Inicio';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeaderBar from '../components/HeaderBar';
import UnderConstruction from '../pages/UnderConstruction';
import Productos from '../pages/Productos';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Perfil from '../pages/Perfil';
import Canchas from '../pages/Canchas';
import Contacto from '../pages/Contacto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '../components/ScrollToTop';
import Comunidad from '../pages/Comunidad';
import FieldsDetails from '../pages/FieldsDetails';

export default function WebsiteLayout() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop/>
                <Header />
                <HeaderBar />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='*' element={<UnderConstruction />} />
                    <Route path='/productos' element={<Productos />} />
                    <Route path='/canchas' element={<Canchas />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/comunidad' element={<Comunidad />} />
                    <Route path='/auth/perfil' element={<Perfil />} />
                    <Route path='/auth/signin' element={<SignIn />} />
                    <Route path='/auth/signup' element={<SignUp />} />
                    <Route path='/canchas/:id' element={<FieldsDetails />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
