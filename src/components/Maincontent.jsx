import React from 'react'
import './Maincontent.css'
import img from './../images/mypic-removebg-preview.png'


export const Maincontent = () => {
  return (
    <div>
     
      <div className="box1">
        <div className="leftdiv">
          <h1 className='main-heading'>Hey,I am Ashok</h1><hr></hr>
          <p className='main-page'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia veniam consequatur praesentium. Sit molestiae minima quo corporis nisi nemo minus distinctio expedita! Quos doloremque commodi quae aspernatur, impedit at facere nesciunt incidunt nihil similique reiciendis ipsa eos sequi numquam minima molestias totam quasi quam tempora? Illum, quo! Eius, non enim!</p>
        </div>
        <div className="rightdiv">
          <img className='myimage' src={img} alt="this is profile image" />
        </div>
      </div>
    </div>
  )
}
export default Maincontent