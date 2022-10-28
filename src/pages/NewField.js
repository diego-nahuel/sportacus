import { useRef, useState } from "react";
import apiUrl from "../API";
import { useNewFieldsMutation } from "../features/fieldsAPI";
import '../styles/NewField.css'

export default function NewField() {
    const [sendField] = useNewFieldsMutation()
    const name = useRef()
    const city = useRef()
    const sport = useRef()
    const price = useRef()
    const image = useRef()
    const description = useRef()

    const sendNewField = (e) => {
        e.preventDefault()
        let field = {
            name: name.current.value,
            user: JSON.parse(localStorage.getItem("user")).id,
            sport: sport.current.value,
            city: city.current.value,
            price: price.current.value,
            image: image.current.value,
            description: description.current.value,
            likes: []
        }
        sendField(field)
    }

    return (
        <>
            <main className="main-bg justify-center">
                <div className="container-width col align-center bg blur main-height text-light xpad-10 ypad-5">
                    <h2>Nueva Cancha</h2>
                    <form className='Form-Container flex-center bg-dark align-end gap-15 col br3 pad-15'>
                        <input className="w100 br3 bg-light form-padding" type='text' name='name' placeholder="Nombre de la cancha" ref={name} />
                        <input className="w100 br3 bg-light form-padding" type='text' name='sport' placeholder="Deporte de la cancha" ref={sport} />
                        <input className="w100 br3 bg-light form-padding" type='text' name='city' placeholder="Ciudad de la cancha" ref={city} />
                        <input className="w100 br3 bg-light form-padding" type='text' name='price' placeholder="Precio de la cancha" ref={price} />
                        <input className="w100 br3 bg-light form-padding" type='text' name='image' placeholder="Link de la imagen de la cancha" ref={image} />
                        <textarea type='text' name='description' placeholder="Descripcion del producto" className="br3 bg-light form-padding min-h100 max-h250 min-w100 max-w100" ref={description} />
                        <button className="submit-button br3 w100" type="send" onClick={sendNewField}>Enviar</button>
                    </form>
                </div>
            </main>


        </>
    )
}