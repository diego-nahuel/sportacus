import { useRef, useState } from "react";
import apiUrl from "../API";
import { useNewFieldsMutation } from "../features/fieldsApi";
import '../styles/NewField.css'

export default function NewField(){
    const [sendField] = useNewFieldsMutation()
    const name=useRef()
    const city=useRef()
    const price=useRef()
    const image=useRef()
    const description=useRef()

const enviar = (e)=>{
    e.preventDefault()
    let field = {
        name: name.current.value,
        user:JSON.parse(localStorage.getItem("user")).id,
        city: city.current.value,
        price:price.current.value,
        image:image.current.value,
        description:description.current.value,
        likes:[]
    }
    sendField(field)
}    

    return(
        <>
        <h1>Nueva Cancha</h1>
        <form className='form'>
            <label to='name' className="label">Nombre
                <input type='text' name='name' placeholder="Inserte el nombre de la cancha" className="input" ref={name}/> 
            </label>
            <label to='city' className="label">Ciudad
                <input type='text' name='city' placeholder="Inserte la ciudad de la cancha" className="input" ref={city}/> 
            </label>
            <label to='price' className="label">Precio
                <input type='text' name='price' placeholder="Inserte el precio de la cancha" className="input" ref={price}/> 
            </label>
            <label to='image' className="label">Imagen
                <input type='text' name='image' placeholder="Inserte el link de la imagen de la cancha" className="input" ref={image}/> 
            </label>
            <label to='description' className="label">Descripcion
                <input type='text' name='description' placeholder="Inserte la descripcion de la cancha" className="input" ref={description}/> 
            </label>
            <button type="send" onClick={enviar}>Enviar</button>
        </form>
        </>
    )
}