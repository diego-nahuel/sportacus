import '../styles/Components.css'
import React, { useEffect, useState, useRef } from 'react';
import { useGetAllQuery } from '../features/productsApi';
import StopPropagation from '../actions/StopPropagation';
import SportCheckDesktop from '../actions/SportsCheckD';
import SportCheckMobile from '../actions/SportsCheckM';
import sports from '../actions/SportList'

export default function Productos() {
  let [search, setSearch] = useState('')
  const searchInput = useRef()
  const searching = () => (
    setSearch(searchInput.current.value),
    console.log(search)
  )
  let { data: petition, isLoading, isSuccess } = useGetAllQuery(search)
  if (isLoading) {
    petition = []
  } else if (isSuccess) {
    petition = petition
  }
  let allProducts
  petition?.response ? allProducts = petition.response : allProducts = petition

  //  console.log(allProducts)

  const productList = (product) =>
    <>
      <div className='Card bg-dark br3'>
        <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{product.name}</h4>
        <img className='IMG-Card' src={product.image} />
        <p className='xpad-10 h75 overflow-hidden font-n w-normal'>{product.description}</p>

        <div className='xdivider-light transparent-25 ymar-10'></div>

        <ul className='list-style-none xpad-10 h25 row space-between'>
          <li>Deporte: {product.sport}</li>
          <li>Stock: {product.stock}</li>
        </ul>

        <div className='xdivider-light transparent-25 ymar-10'></div>

        <div className='space-between w100'>
          <p className='xpad-10 align-center'>Precio: ${product.price}</p>
          <button className='Card-Button submit-button br-none w50 text-dark form-padding font-14'
           onClick={()=>localStorage.setItem('carrito', product)}>Agregar</button>
        </div>
      </div>
    </>

  const sportSelect = (sport) =>
    <>
      <option>{sport.name}</option>
    </>

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
            <h2>Productos</h2>
            <input className='Search-Input br3 form-padding bg-light align-end' type="search" ref={searchInput} placeholder="Busque un producto..." onChange={searching}></input>
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
            {allProducts?.map(productList)}
          </div>

        </div>
      </main>
    </>
  )
}
