export default function InputDetails(props) {
    let field
    props.data ? field = props.data : field = props

    return (
        <>
            <main className='main-bg main-height text-light justify-center'>
                <div className='container-width justify-center bg blur col gap-15 ypad-10'>
                    <div className="br3 bg-dark col align-center gap-5 tpad-5">
                        <h2 className="xpad-10 text-center">{field.name}</h2>
                        <img className="w100" src={field.image} />
                        <div className="font-16 xpad-10 align-start col w100">
                            <span>{field.description}</span>
                            <div className="xdivider-light w100 transparent-25 ymar-10"></div>
                            <span>Ciudad: {field.city}</span>
                            <div className="xdivider-light w100 transparent-25 ymar-10"></div>
                            <span className="align-end font-18">${field.price}</span>
                        </div>
                        <button className='Button-Reserve font-18 submit-button br-none w100 text-dark form-padding'>Reservar</button>
                    </div>
                </div>
            </main>
        </>
    )
}