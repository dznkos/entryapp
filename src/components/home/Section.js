import React from 'react'
import { Button } from 'react-bootstrap'


export const Section = () => {
  return (
    <section className="section">
      <div className="row">
        <section className='section-title'>
          <div className='main-title'>
            <h6>Que hacemos ?</h6>
            <h1>Servicios de asistencia por encargo</h1>
          </div>
          <Button variant="success" >Reservar</Button> 
        </section> 
      </div>
     
      <div className="row">

        <div className="col-md-5 ms-5">          
            <h6>Nuestro servicios</h6>
            <h2>Ofrecemos distintos tipos de servicios</h2>
            <hr/>
            
            <Button variant="primary" >Mas informacion</Button>             
        </div>

        <div className="col-md-5 ms-5 mt-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim cupiditate unde eum esse nisi repudiandae, a quos assumenda ducimus sint quae vitae deleniti debitis delectus pariatur eaque explicabo blanditiis fugiat!</p>
        </div>
      </div>

    
    </section>      

    
  )
}
