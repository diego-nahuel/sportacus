export default function InputDetails(props){
let field
props.data?field=props.data:field=props

    return(
    <>
         <h1>{field.name}</h1>
         <img src={field.image}/> 
         <p>{field.city}</p>
         <p>{field.price}</p>
         <p>{field.description}</p>
    </>
)
}