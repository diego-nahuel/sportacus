import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter, useNavigate } from 'react-router-dom';
import '../styles/Header.css';
import Swal from 'sweetalert2';
import { useSignInMutation, useSignOutMutation } from '../features/authAPI';
import { addUser, removeUser } from '../features/userSlice';
import ModalSignIn from './UserMenu/ModalSignIn'
import ModalSignUp from './UserMenu/ModalSignUp'

function UserMenu() {
    const userRedux = useSelector(state => state.user.u);
    const dispatch = useDispatch();
    const [signIn] = useSignInMutation()
    const [signOut] = useSignOutMutation()
    let Navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [user, setUser] = useState({
        mail: "", password: "", from: "form"
    });

    useEffect(() => {
        JSON.parse(localStorage.getItem('user')) ?
            dispatch(addUser(JSON.parse(localStorage.getItem('user')))) :
            dispatch(removeUser(null))
    }, [])

    /* Modal */
    const [modalSignIn, setModalSignIn] = useState(false)
    const handleModalSignIn = () => {
        if (modalSignIn == true) {
            setModalSignIn(false)
        } else {
            setModalSignIn(true)
        }
    }
    const [modalSignUp, setModalSignUp] = useState(false)
    const handleModalSignUp = () => {
        if (modalSignUp == true) {
            setModalSignUp(false)
        } else {
            setModalSignUp(true)
        }
    }
    /* Modal */

    const DropdownIttem = (props) => {
        return (
            <li className='dropdownItem'>
                <LinkRouter className='row decoration-none' to={props.to} onClick={() => setOpen(false)}>
                    <img className='DI-icon' src={props.img} />
                    <span className='row'>{props.text}</span>
                </LinkRouter>
            </li>
        )
    }
    const SignOutNav = () => {
        return (
            <LinkRouter className='dropdownItem decoration-none'>
                <li className='row' to='/localhost:3000/' onClick={signOutUser}>
                    <img className='DI-icon' src='https://cdn-icons-png.flaticon.com/512/876/876779.png' />
                    <span>Salir</span>
                </li>
            </LinkRouter>
        )
    }
    const signOutUser = async (e) => {
        setOpen(false)
        let { error } = await signOut({ mail: userRedux.mail });
        if (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `No se ha podido cerrar la sesión correctamente, por favor inténtelo nuevamente.`
            });
        } else {
            dispatch(removeUser(null))
            Swal.fire({
                icon: 'success',
                title: `¡Nos vemos ${userRedux.name}!`,
                text: `Se ha cerrado sesión.`
            });
        }
        localStorage.removeItem("user")
        localStorage.removeItem("token")
    }

    return (
        <>
            <div>
                {userRedux ?
                    <img className='Burger-IMG br3' src={userRedux.photo} onClick={() => { setOpen(!open) }} /> :
                    <img className='Burger-IMG br3' src='https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-17.jpg' onClick={() => { setOpen(!open) }} />}

                <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                    {userRedux ?
                        <>
                            {(userRedux.role === "admin") ?
                                <>
                                    <h3 className='user-menu-h3'>{userRedux.name}<br /><span>Administrador</span></h3>
                                    <ul>
                                        <DropdownIttem img={'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'} to={'/auth/perfil'} text={"Mi Perfil"} />
                                        <DropdownIttem img={'https://cdn-icons-png.flaticon.com/512/1001/1001371.png'} to={'/auth/signup'} text={"Nuevo Admin"} />
                                        <SignOutNav />
                                    </ul>
                                </>
                                :
                                <>
                                    <h3 className='user-menu-h3'>{userRedux.name}<br /><span>Nombre de campeones</span></h3>
                                    <ul>
                                        <DropdownIttem img={'https://cdn-icons-png.flaticon.com/512/7078/7078010.png'} to={'/auth/signin'} text={"Mi Perfil"} />
                                        <SignOutNav />
                                    </ul>
                                </>
                            }
                        </>
                        :
                        <>
                            <ul>
                                <li className='dropdownItem' onClick={handleModalSignIn}>
                                    <img className='DI-icon' src='https://cdn-icons-png.flaticon.com/512/7078/7078010.png' />
                                    <p className='Links'>Entrar</p>
                                </li>
                                <span className='decoration' onClick={handleModalSignUp}>
                                    <DropdownIttem img={'https://cdn-icons-png.flaticon.com/512/1001/1001371.png'} text={"Registrarse"} />
                                </span>
                            </ul>
                        </>
                    }
                </div>
            </div>
            <>
                {modalSignIn === true && (
                    <ModalSignIn />
                )}
            </>
            <>
                {modalSignUp === true && (
                    <ModalSignUp />
                )}
            </>
        </>
    )
}

export default UserMenu