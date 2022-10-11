const SportCheckDesktop = (sport) =>
    <>
      <button className='Hide-Checkbox-Mobile form-padding button-check'>
        <label className='justify-center check-indent'>
          <input type="checkbox"></input>
          {sport.sport}
        </label>
      </button>
    </>

export default SportCheckDesktop;