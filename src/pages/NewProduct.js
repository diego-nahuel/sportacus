import { useRef, useState } from "react";
import apiUrl from "../API";
import { useCreateMutation } from "../features/productsApi";
import '../styles/NewField.css'

export default function NewProduct(){
    const [sendProduct] = useCreateMutation()
    const name=useRef()
    const price=useRef()
    const image=useRef()
    const description=useRef()

const enviar = (e)=>{
    e.preventDefault()
    let product = {
        name: name.current.value,
        price:price.current.value,
        image:image.current.value,
        description:description.current.value,

    }
    sendProduct(product)
}    

    return(
        <>
        <h1>Nueva Cancha</h1>
        <form className='form'>
            <label to='name' className="label">Nombre
                <input type='text' name='name' placeholder="Inserte el nombre del producto" className="input" ref={name}/> 
            </label>
            <label to='price' className="label">Precio
                <input type='text' name='price' placeholder="Inserte el precio del producto" className="input" ref={price}/> 
            </label>
            <label to='image' className="label">Imagen
                <input type='text' name='image' placeholder="Inserte el link de la imagen del producto" className="input" ref={image}/> 
            </label>
            <label to='description' className="label">Descripcion
                <input type='text' name='description' placeholder="Inserte la descripcion del producto" className="input" ref={description}/> 
            </label>
            <button type="send" onClick={enviar}>Enviar</button>
        </form>
        </>
    )
}