import '../styles/Components.css'
import { React, useEffect, useRef, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import StopPropagation from '../actions/StopPropagation'
import SportCheckDesktop from '../actions/SportsCheckD';
import SportCheckMobile from '../actions/SportsCheckM';
import { useAllFieldsQuery } from '../features/fieldsApi'

const fieldList = (field) =>
  <div className='Card bg-dark br3'>
    <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{field.name}</h4>
    <img className='IMG-Card' src={field.image} alt=''/>
    <p className='xpad-10'>Deporte: {field.sport}</p>
    <div className='xdivider-light transparent-25 ymar-10'></div>
    <p className='xpad-10'>Ciudad: {field.city}</p>
    <div className='xdivider-light transparent-25 ymar-10'></div>
    <div className='space-between w100'>
      <p className='xpad-10 align-center'>Precio: ${field.price}</p>
      <LinkRouter to={field._id} key={field.name} className='Card-Button submit-button br-none w50 text-dark form-padding text-center font-14'>
        Ver mas...
      </LinkRouter>
    </div>
  </div>

const sportCheck = (field) =>
  <button className='br3 form-padding button-check'>
    <label className='align-center check-indent'>
      <input type="checkbox" className=''></input>
      {field.sport}
    </label>
  </button>

export default function Canchas() {
  const [canchas, setCanchas] = useState([])
  const [handleCheck, setHandleCheck] = useState([]);
  const [search, setSearch] = useState('')
  const searchInput = useRef('')
  const accion = () => (
    setSearch(searchInput.current.value)
  )
  const change = (e) =>{
    setHandleCheck({...handleCheck, [e.target.value]: e.target.checked})
  }

  useEffect(() => {
    function filterBySport(value){
      if(handleCheck !== undefined){
        if(handleCheck.sport === true){
          return value.sport
        }
      } else{
        return value
      }
    }
    setCanchas(filterBySport)
  }, [handleCheck])

  let { data: petition, isLoading, isSuccess } = useAllFieldsQuery(search)
  useEffect(() => {
    if (isLoading) {
      petition = []
    } else if (isSuccess) {
      petition = petition
    }
    petition?.response ? setCanchas(petition.response) : setCanchas(petition)
  }, [petition])
  let newSet = [...new Set(canchas?.map(p => p.sport))]

  const fieldCard = (field) =>
    <div>
      <h2>{field.name}</h2>
      <img alt={field.name} src={field.image} />
      <p>{field.city}</p>
    </div>

  const [OpenCheckbox, setOpenCheckbox] = useState(false)
  const handleOpenCheckbox = () => {
    if (OpenCheckbox == true) {
      setOpenCheckbox(false)
      console.log(setOpenCheckbox)
    } else {
      setOpenCheckbox(true)
    }
  };

  return (
    <>
      <main className='main-bg main-height text-light justify-center'>
        <div className='container-width bg blur col gap-15 pad-10'>
          <div className='col-row-768 gap-5 space-between'>
            <h2>Canchas</h2>
            <input className='Search-Input w25 br3 form-padding bg-light align-end' type="search" ref={searchInput} onChange={accion} placeholder="Buscar cancha..."></input>
          </div>

          <div className='FilterSort bg-dark br3 space-between w100'>
            <div className='Checkboxes justify-start'>

              <div className='Hide-Checkbox-Desktop bg-dark col br3 w100' onClick={handleOpenCheckbox}>
                <div className='row xpad-10 space-between'>
                  <h5 className='text-light w-normal font-n ypad-5'>Categorías </h5>
                  <img className='h25 align-end bpad-5' src='https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png' alt=''/>
                </div>
                {OpenCheckbox ?
                  <button className='br3 w100 form-padding button-check' onClick={StopPropagation}>
                    {newSet?.map((sport) => SportCheckMobile(sport, change))}
                  </button> : null}
              </div>

              {newSet?.map((sport) => SportCheckDesktop(sport, change))}
            </div>
          </div>

          <div className='card-container justify-center gap-30'>
            {canchas?.map(fieldList)}
          </div>
        </div>
      </main>
    </>
  )
}
