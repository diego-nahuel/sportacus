const SportCheckDesktop = (sport, change) =>
    <>
    
        <label className='justify-center check-indent' htmlFor={sport} >
          <input type="radio" onChange={change} value={sport} id={sport} name="sport" ></input>
          {sport}
        </label>
      
    </>

export default SportCheckDesktop;