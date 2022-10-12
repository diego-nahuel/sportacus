import { useParams } from "react-router-dom";
import axios from "axios";
import apiUrl from "../API";
import { useState, useEffect } from "react";
import InputDetails from "../components/InputDetails";
import { useGetFromFieldQuery } from "../features/commentAPI";
import Comentarios from "../components/Comentarios/Comentarios";

export default function FieldsDetails() {
    const id = useParams()
    const [field, setField] = useState()
    useEffect(() => {
        axios.get(apiUrl + '/fields/' + id.id)
            .then(response => setField(response.data.response))
    }, [])

    return (
    <>
    <InputDetails data={field} />
    <Comentarios/>
    </>
)}