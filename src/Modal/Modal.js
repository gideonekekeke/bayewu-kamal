import React from 'react'
import './style.css'

function Modal({selected,setSelected}) {
 const handleClick = (e)=>{
   if(e.target.classList.contains('backdrop'))
   setSelected(null)
 }

  return (
    <div className = 'backdrop'
    onClick={handleClick}
  >
      <img  src = {selected} alt = 'this is a big image'/>
      
    </div>
  )
}

export default Modal