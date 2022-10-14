const SportCheckMobile = (sport, change) =>
<>
<div className="xdivider-light transparent-50"></div>
  <label className='justify-start check-indent'>
    <input type="radio" onChange={change} value={sport}></input>
    {sport}
  </label>
</>

export default SportCheckMobile;