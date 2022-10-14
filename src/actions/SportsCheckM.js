const SportCheckMobile = (sport, change) =>
<>
  <label className='Checkbox-Responsive-Divider align-center check-indent ypad-5'>
    <input type="checkbox" onChange={change} value={sport}></input>
    {sport}
  </label>
</>

export default SportCheckMobile;