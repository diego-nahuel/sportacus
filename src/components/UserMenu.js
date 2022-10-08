import React, { useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as LinkRouter , useNavigate} from 'react-router-dom';
import '../styles/Header.css';
import Swal from 'sweetalert2';
import { useSignInMutation, useSignOutMutation } from '../features/authAPI';
import { addUser, removeUser } from '../features/userSlice';


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

    const DropdownIttem = (props) => {
        return(
        <li className='dropdownItem'>
            <img className='DI-icon' src={props.img}/>
            <LinkRouter className='Links' to={props.to} onClick={()=> setOpen(false)}>{props.text}</LinkRouter>
        </li>
        )
    }
    const SignOutNav = () =>{
        return(
            <li className='dropdownItem'>
                <img className='DI-icon' src='https://cdn-icons-png.flaticon.com/512/876/876779.png'/>
                <LinkRouter className='Links' to='/' onClick={signOutUser}>Salir</LinkRouter>
            </li>
        )
    }
    const signOutUser = async (e) => {
        setOpen(false)
        let {error} =await signOut({email : userRedux.email});
        if(error){
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
    const SignInClick = () => {
        (async () => {
            setOpen(false)
            const { value: formValues } = await Swal.fire({
            title: 'Inicio de Sesión',
            html:
                '<input id="swal-input1" type="email" name="mail" placeholder="Correo electrónico" class="swal2-input">' +
                '<input id="swal-input2" type="password" placeholder="Contraseña" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
                ]
            }})
            if (formValues) {
                setUser({
                    ...user, mail: formValues[0], password: formValues[1]
                })
                console.log(user);
                let {data, error} = await signIn(user);
                if(error){
                    Swal.fire({icon:"error", title: "Error", text:error.data.message})
                } else {
                    localStorage.setItem("token", data.response.token);
                    dispatch(addUser(data.response.user));
                    Swal.fire(`Bienvenido ${data.response.user.name}`)
                    Navigate("/");
                } 
            }
        })()
    }
    
  return (
    <div>
        <img className='Burger-IMG br3' src='https://icon-library.com/images/user-icon-png-transparent/user-icon-png-transparent-17.jpg' onClick={()=>{setOpen(!open)}}/>

        <div className={`dropdown-menu ${open? 'active':'inactive'}`}>
        {userRedux?
        <>
            {(userRedux.role === "admin")?
            <>
                <h3 className='user-menu-h3'>{userRedux.name}<br/><span>Administrador</span></h3>
                <ul>
                    <DropdownIttem img= {'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'} to={'/auth/signin'} text={"Mi Perfil"}/>
                    <DropdownIttem img= {'https://cdn-icons-png.flaticon.com/512/1001/1001371.png'} to={'/auth/signup'} text={"Nuevo Admin"}/>
                    <SignOutNav/>
                </ul>
            </>
            :
            <>
            <h3 className='user-menu-h3'>{userRedux.name}<br/><span>Nombre de campeones</span></h3>
            <ul>
                <DropdownIttem img= {'https://cdn-icons-png.flaticon.com/512/7078/7078010.png'} to={'/auth/signin'} text={"Mi Perfil"}/>
                <SignOutNav/>
            </ul>
            </>
            }
        </>
        :
        <>
            <ul>
                <li className='dropdownItem'>
                    <img className='DI-icon' src='https://cdn-icons-png.flaticon.com/512/7078/7078010.png'/>
                    <p className='Links' onClick={SignInClick}>Entrar</p>
                </li>
                <DropdownIttem img= {'https://cdn-icons-png.flaticon.com/512/1001/1001371.png'} to={'/auth/signup'} text={"Registrarse"}/>
            </ul>
        </>
        }
        </div>
    </div>
  )
}

export default UserMenu