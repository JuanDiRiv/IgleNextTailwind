import React from 'react'

function Location() {
  return (
    <div className='w-full h-96'>
    <iframe
        className='w-full h-full border-0'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.11270888005!2d-74.02837162429036!3d4.920804339708631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40776161106629%3A0xe439b27d2315e7da!2sIglesia%20Cristiana%20Rios%20del%20Amor%20de%20Dios%20Cajic%C3%A1!5e0!3m2!1ses-419!2sco!4v1724967354934!5m2!1ses-419!2sco"
        allowFullScreen={true}
        loading="lazy"
    ></iframe>
    <div>
        <h2>Iglesia Cristiana Rios del Amor de Dios</h2>
        <div></div>
    </div>
</div>
  )
}

export default Location

