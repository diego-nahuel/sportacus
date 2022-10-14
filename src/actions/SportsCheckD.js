const SportCheckDesktop = (sport, change) =>
    <>
      <label className='justify-center check-indent button-check form-padding' htmlFor={sport} >
        <input type="radio" onChange={change} value={sport} id={sport} name="sport" ></input>
        {sport}
      </label>
    </>

export default SportCheckDesktop;