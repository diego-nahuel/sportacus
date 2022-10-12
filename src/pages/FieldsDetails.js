import { useParams } from "react-router-dom";
import axios from "axios";
import apiUrl from "../API";
import { useState, useEffect } from "react";
import InputDetails from "../components/InputDetails";
import { useGetFromFieldQuery } from "../features/commentAPI";
import Comentarios from "../components/Comentarios/Comentarios";
import NuevoComentario from '../components/Comentarios/NuevoComentario'

export default function FieldsDetails() {
    const id = useParams()
    const [field, setField] = useState()
    useEffect(() => {
        axios.get(apiUrl + '/fields/' + id.id)
            .then(response => setField(response.data.response))
    }, [])

    return (
        <>
            <main className='main-bg main-height justify-center'>
                <div className='container-width align-center bg blur col gap-15 xpad-15 ypad-15'>
                    <InputDetails data={field} />
                    <Comentarios />
                    <NuevoComentario />
                </div>
            </main>
        </>
    )
}