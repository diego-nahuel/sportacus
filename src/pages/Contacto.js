import React from 'react'
import '../styles/Contacto.css'
import '../styles/UserForm.css'

export default function Contacto() {
  return (
    <>
      <main className='main-bg text-light justify-center'>
        <div className='bg blur container-width col align-center gap-15 ypad-15'>
          <div className='Columna-Contacto gap-15 space-around xpad-15'>
            <div className='Info'>
              <h4>Titulo Info</h4>
              <p className='text-indent'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis lectus tellus. Vestibulum ut mattis nunc, in sodales urna. Proin ipsum purus, vehicula ut tempus quis, congue ut mi. Pellentesque eget ante eros. Morbi tristique tincidunt finibus. Nullam malesuada aliquet ultrices. Nam ut quam non ligula pretium rhoncus. Nullam metus leo, ullamcorper eu odio in, fermentum malesuada risus. In convallis viverra nibh, quis scelerisque ligula scelerisque id. Vivamus gravida ac lacus sed rhoncus. Fusce vitae eros metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla venenatis condimentum ligula sed semper. Suspendisse potenti. Curabitur pulvinar pulvinar nulla in porta.</p>
            </div>
            <div className='Info col'>
              <h4 className='align-start'>Titulo Form</h4>
              <form className='w100 br3 bg-dark gap-10 col tpad-5 bpad-10 xpad-10'>
                <label className='col w75'>Tema:<input className='br3 form-padding'></input></label>

                <label className='col'>Mensaje:<textarea className='Mensaje resize-none form-padding br3' placeholder='Escriba su mensaje'></textarea></label>
                
                <button className='br3 submit-button form-padding' /* onClick={} */>Enviar</button>
              </form>
            </div>
          </div>

          <div className='Columna-Contacto'>
                <iframe height="600" className='w100 xpad-10 br10' src="https://maps.google.com/maps?q=Club%20Atl%C3%A9tico%20Boca%20Juniors&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0"></iframe>
          </div>
        </div>
      </main>
    </>
  )
}
