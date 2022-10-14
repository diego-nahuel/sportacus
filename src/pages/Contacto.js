import React from 'react'
import '../styles/Contacto.css'
import '../styles/UserForm.css'

export default function Contacto() {
  return (
    <>
      <main className='main-bg text-light justify-center'>
        <div className='bg blur container-width col align-center gap-15 ypad-15 xpad-15'>
          <h2 className='align-start'>Contactanos</h2>
          <div className='xdivider-light ydivider-light transparent-50 br360 w100'></div>
          <div className='Columna-Contacto gap-15 space-around'>

            <div className='Info'>
              <div className='bg-light br3 xpad-10 ypad-5 col text-dark'>
                <h3>Queres volverte socio?</h3>
                <p className='text-indent'>Como socio vas a poder publicar y administrar las canchas con las que trabajes</p>
                <div className='xdivider-dark ydivider-light transparent-25 br360 w100 ymar-10'></div>
                <h3>Queres volverte socio?</h3>
                <p className='text-indent'>Dejanos un mensaje usando el formulario en pantalla y en breve nos pondremos en contacto para verificarte como socio.</p>
              </div>
            </div>

            <div className='xdivider-light ydivider-light transparent-50 br360'></div>

            <div className='Info col'>
              <form className='w100 br3 bg-dark gap-15 col tpad-5 pad-15'>
                <label className='col w75'>Tema:<input className='br3 form-padding'></input></label>
                <label className='col'>Mensaje:<textarea className='Mensaje resize-none form-padding br3' placeholder='Escriba su mensaje'></textarea></label>
                <button className='br3 submit-button form-padding' /* onClick={} */>Enviar</button>
              </form>
            </div>
          </div>

          <div className='xdivider-light ydivider-light transparent-50 br360 w100'></div>

          <div className='Columna-Contacto'>
            <iframe height="600" className='w100 br10' src="https://maps.google.com/maps?q=Club%20Atl%C3%A9tico%20Boca%20Juniors&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
          </div>
        </div>
      </main>
    </>
  )
}
