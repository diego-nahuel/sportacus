import axios from 'axios'
import '../styles/Components.css'
import { React, useEffect, useRef, useState } from 'react'
import apiUrl from '../API'
import { Link as LinkRouter } from 'react-router-dom'
import { useAllFieldsQuery } from '../features/fieldsAPI'
import StopPropagation from '../actions/StopPropagation'
import SportCheckDesktop from '../actions/SportsCheckD';
import SportCheckMobile from '../actions/SportsCheckM';
import sports from '../actions/SportList'

const fieldList = (field) =>
  <div className='Card bg-dark br3'>
    <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{field.name}</h4>
    <img className='IMG-Card' src={field.image} />
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

const sportSelect = (sport) =>
  <option>{sport.sport}</option>

export default function Canchas() {
  const [canchas, setCanchas] = useState([])
  const [search, setSearch] = useState('')
  const searchInput = useRef('')
  const accion = () => (
    setSearch(searchInput.current.value),
    console.log(search)
  )
  useEffect(() => {
    axios.get(apiUrl + `/fields?city=${search}`)
      .then(response => { setCanchas(response.data) },
      )
  }, [canchas])

  // let {data:canchas,isLoading,isSuccess } = useAllFieldsQuery(search)
  // if (isLoading) {
  //   canchas = []
  // } else if (isSuccess) {
  //   canchas = canchas
  // }

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
                  <img className='h25 align-end bpad-5' src='https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png' />
                </div>
                {OpenCheckbox ?
                  <button className='br3 w100 form-padding button-check' onClick={StopPropagation}>
                    {sports.map(SportCheckMobile)}
                  </button> : null}
              </div>

              {sports.map(SportCheckDesktop)}
            </div>

            <select className='Select form-padding bg-light flex-end'>
              <option></option>
              {sports.map(sportSelect)}
            </select>
          </div>

          <div className='card-container justify-center gap-30'>
            {canchas?.response?.map(fieldList)}
          </div>
        </div>
      </main>
    </>
  )
}
