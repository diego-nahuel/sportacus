import '../styles/Components.css'
import React, { useState, useRef, useEffect } from 'react';
import { useGetAllQuery } from '../features/productsApi';
import StopPropagation from '../actions/StopPropagation';
import SportCheckDesktop from '../actions/SportsCheckD';
import SportCheckMobile from '../actions/SportsCheckM';
import { ADD_TO_CART } from '../reducers/ShoppingReducer';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../components/Alert';

export default function Productos() {
  let [search, setSearch] = useState('')
  const [allProducts, setAllProducts] = useState([])
  const [handleCheck, setHandleCheck] = useState("");
  const searchInput = useRef()
  const [query, setQuery] = useState("all")
  const searching = (e) => {
    setSearch(e.target.value);
  }

  const change = (e) => {
    setHandleCheck(e.target.value)
  }
  useEffect(() => {
    if (search === "" && handleCheck === "") {
      setQuery("all")
    } else if (search === "" && handleCheck !== "") {
      setQuery(`all&sport=${handleCheck}`)
    } else if (search !== "" && handleCheck !== "") {
      setQuery(`${search}&sport=${handleCheck}`)
    } else if (search !== "" && handleCheck === "") {
      setQuery(search)
    }
  }, [search, handleCheck])

  let { data: petition, isLoading, isSuccess } = useGetAllQuery(query)

  useEffect(() => {
    if (isLoading) {
      petition = []
    } else if (isSuccess) {
      petition = petition
      petition.response ? setAllProducts(petition.response) : setAllProducts(petition)
    }
  }, [petition])

  const dispatch = useDispatch()
  const cart = useSelector(state => state)
  const addToCart = (id) => { dispatch(ADD_TO_CART(id)) }
  const Cart = (id) => {
    addToCart(id)
    Alert("success","Agregado")
  }
  let newSet = [...new Set(allProducts.map(p => p.sport))]
  let sports = ["Boxeo", "Futbol", "Basquet", "Voleibol", "Tenis", "Natacion", "Varios"]

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }
  const productList = (product, index) =>
    <>
      <div className='Card bg-light br3 text-dark' key={index}>
        <h4 className='xpad-10 pad-5 w-normal font-l text-center'>{product.name}</h4>
        <img className='IMG-Card bg-dark' src={product.image} alt={product.name} />
        <div className='xpad-10'>
          <p className=' h75 overflow-hidden font-n w-normal'>{product.description}</p>

          <div className='xdivider-dark transparent-25 ymar-10'></div>

          <ul className='list-style-none h25 row space-between'>
            <li>Deporte: {product.sport}</li>
            <li>Stock: {product.stock}</li>
          </ul>

          <div className='xdivider-dark transparent-25 ymar-10'></div>
        </div>


        <div className='space-between w100'>
          <p className='xpad-10 align-center'>Precio: ${formatNumber(product.price)}</p>
          <button className='Card-Button submit-button br-none w50 form-padding font-14'
            onClick={() => Cart(product._id)}>Agregar</button>
        </div>
      </div>
    </>

  const [OpenCheckbox, setOpenCheckbox] = useState(false)
  const handleOpenCheckbox = () => {
    if (OpenCheckbox == true) {
      setOpenCheckbox(false)
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

          <div className='FilterSort bg-dark br3 space-between'>
            <div className='Checkboxes justify-start  xpad-15'>

              <div className='Hide-Checkbox-Desktop bg-dark col br3 w100' onClick={handleOpenCheckbox}>
                <div className='row xpad-10 space-between'>
                  <h5 className='text-light w-normal font-16 ypad-5'>Categorías </h5>
                  <img className='h25 align-end bpad-5' src='https://popupfilmresidency.org/wp-content/uploads/2019/05/white-down-arrow-png-2.png' alt='' />
                </div>
                {OpenCheckbox ?
                  <div className='br3 w100 form-padding button-check col gap-10 bpad-10' onClick={StopPropagation}>
                    <div className="xdivider-light transparent-50"></div>
                    <label className='justify-start check-indent' htmlFor="all" >
                      <input type="radio" onChange={change} value="" id="all" name="sport" ></input>
                      Todos
                    </label>
                    {sports.map((sport) => SportCheckMobile(sport, change))}
                  </div> : null}
              </div>

              <div className='Hide-Checkbox-Mobile row gap-10'>
                <label className='justify-center check-indent button-check form-padding' htmlFor="all" >
                  <input type="radio" onChange={change} value="" id="all" name="sport" ></input>
                  Todos
                </label>
                {sports.map((sport) => SportCheckDesktop(sport, change))}
              </div>

            </div>
          </div>

          <div className='xdivider-light transparent-50'></div>

          <div className='card-container justify-center gap-30'>
            {allProducts?.map(productList)}
          </div>

        </div>
      </main>
    </>
  )
}