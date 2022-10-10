import { useParams } from "react-router-dom";
import { useOneFieldsQuery } from "../features/fieldsAPI";
import axios from "axios";
import apiUrl from "../API";
import { useState, useEffect } from "react";
import InputDetails from "../components/InputDetails";


export default function FieldsDetails(){
const id = useParams()
const [field, setField]=useState()
useEffect(()=>{
    axios.get(apiUrl+'/fields/'+id.id)
        .then(response => setField(response.data.response))
    }, [])
console.log(field)

return(<InputDetails data={field}/>)
}