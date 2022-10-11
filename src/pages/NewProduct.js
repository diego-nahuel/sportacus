import { useRef, useState } from "react";
import apiUrl from "../API";
import { useCreateMutation } from "../features/productsApi";
import '../styles/NewField.css'

export default function NewProduct() {
    const [sendProduct] = useCreateMutation()
    const name = useRef()
    const sport = useRef()
    const type = useRef()
    const price = useRef()
    const stock = useRef()
    const image = useRef()
    const description = useRef()

    const sendNewProduct = (e) => {
        e.preventDefault()
        let product = {
            name: name.current.value,
            sport: sport.current.value,
            type: type.current.value,
            price: price.current.value,
            stock: stock.current.value,
            image: image.current.value,
            description: description.current.value,

        }
        sendProduct(product)
    }

    return (
        <>
            <main className="main-bg justify-center">
                <div className="container-width col align-center bg blur main-height text-light xpad-10 ypad-5">
                    <h2>Nuevo Producto</h2>
                        <form className='Form-Container flex-center bg-dark align-end gap-15 col br3 pad-15'>
                            <input className="w100 br3 bg-light form-padding" type='text' name='name' placeholder="Nombre del producto" ref={name} />
                            <input className="w100 br3 bg-light form-padding" type='text' name='sport' placeholder="Deporte del producto" ref={sport} />
                            <input className="w100 br3 bg-light form-padding" type='text' name='type' placeholder="Tipo de producto" ref={type} />
                            <input className="w100 br3 bg-light form-padding" type='number' name='price' placeholder="Precio del producto" ref={price} />
                            <input className="w100 br3 bg-light form-padding" type='number' name='stock' placeholder="Stock del producto" ref={stock} />
                            <input type='url' name='image' placeholder="Link de la imagen del producto" className="w100 br3 bg-light form-padding" ref={image} />
                            <textarea type='text' name='description' placeholder="Descripcion del producto" className="br3 bg-light form-padding min-h100 max-h250 min-w100 max-w100" ref={description} />
                            <button className="submit-button br3 w100" type="send" onClick={sendNewProduct}>Enviar</button>
                        </form>
                </div>
            </main>
        </>
    )
}