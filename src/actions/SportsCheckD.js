const SportCheckDesktop = (sport, change) =>
    <>
      <button className='Hide-Checkbox-Mobile form-padding button-check'>
        <label className='justify-center check-indent'>
          <input type="checkbox" onChange={change} value={sport}></input>
          {sport}
        </label>
      </button>
    </>

export default SportCheckDesktop;