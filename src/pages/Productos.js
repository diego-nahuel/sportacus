import '../styles/Components.css'
import React, { useEffect, useState } from 'react';
import { useGetAllQuery } from '../features/productsApi'

const sports = [
  { name: 'Name 1', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 1', sport: 'Sport 1' },
  { name: 'Name 2', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 2', sport: 'Sport 2' },
  { name: 'Name 3', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 3', sport: 'Sport 3' },
  { name: 'Name 4', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 4', sport: 'Sport 4' },
  { name: 'Name 5', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 5', sport: 'Sport 5' },
  { name: 'Name 5', photo: 'https://images.unsplash.com/photo-1546608235-3310a2494cdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=638&q=80', description: 'Description 6', sport: 'Sport 6' }
]

export default function Productos() {
  let { data: petition, isLoading, isSuccess } = useGetAllQuery('')
  if (isLoading) {
    petition = []
  } else if (isSuccess) {
    petition = petition
  }
  let allProducts
  petition.response ? allProducts = petition.response : allProducts = petition

  //  console.log(allProducts)

  const productList = (product) =>
    <>
      <div className='Card bg-dark br3'>
        <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{product.name}</h4>
        <img className='IMG-Card' src={product.image} />
        <p className='xpad-10 h75 overflow-hidden font-n w-normal'>{product.description}</p>

        <div className='xdivider-light transparent-25 ymar-10'></div>

        <div className='space-between w100'>
          <p className='xpad-10 align-center'>Precio: ${product.price}</p>
          <button className='Card-Button submit-button br-none w50 text-dark form-padding'>Comprar</button>
        </div>
      </div>
    </>

  const sportCheckDesktop = (sport) =>
    <>
      <button className='Hide-Checkbox-Mobile form-padding button-check'>
        <label className='justify-center check-indent'>
          <input type="checkbox"></input>
          {sport.sport}
        </label>
      </button>
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
  const freezeCheckbox = event => {
    event.stopPropagation();
  };

  const sportCheckMobile = (sport) =>
    <>
      <label className='Checkbox-Responsive-Divider align-center check-indent ypad-5'>
        <input type="checkbox"></input>
        {sport.sport}
      </label>
    </>

  return (
    <>
      <main className='main-bg main-height text-light justify-center'>
        <div className='container-width bg blur col gap-15 pad-10'>
          <h3>Productos</h3>
          <div className='FilterSort bg-dark br3 space-between w100'>
            <div className='Checkboxes justify-start'>

              <div className='Hide-Checkbox-Desktop bg-dark col br3 w100' onClick={handleOpenCheckbox}>
                <div className='row xpad-10 space-between'>
                  <h5 className='text-light w-normal font-n ypad-5'>Categorías </h5>
                  <img className='h25 align-end bpad-5' src='https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png' />
                </div>
                {OpenCheckbox ?
                  <button className='br3 w100 form-padding button-check' onClick={freezeCheckbox}>
                    {sports.map(sportCheckMobile)}
                  </button> : null}
              </div>
              {sports.map(sportCheckDesktop)}
            </div>

            <select className='Select form-padding bg-light flex-end'>
              <option></option>
              {sports.map(sportSelect)}
            </select>
          </div>

          <div className='card-container justify-center gap-30'>
            {allProducts.map(productList)}
          </div>

        </div>
      </main>
    </>
  )
}
