import React from 'react'
import pic from '../img/bo.jpg'
import './body1.css'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'

function Body1() {
  return (
    <div className='BodyArrange'>

    <div className='body'>
   
      < motion.div 
      initial = "hidden"
      animate = "visible"
      variants = {{
        hidden : {
          scale : .8,
          opacity : 0
        },
        visible :{
          scale : 1,
          opacity : 1,
          transition :{
            delay : .8
          }
        }
      }}
      
      className='body_content'>
        <div className = 'contes' style = {{color : 'coral', display : 'flex', justifyContent : 'center', alignItems : 'center' }}>-- JOIN THE MOVE TO -- </div>
        <div style = {{ fontSize : '20px' , color : 'coral' , display : 'flex', justifyContent : 'center', alignItems : 'center' }}>BRING THE AJEGUNLE
        </div >
        <div className = "conte" style = {{ display : 'flex', justifyContent : 'center', alignItems : 'center' }}>DREAM TO REALITY</div>
        <p  className = 'divide' style = {{ display : 'flex', justifyContent : 'center', alignItems : 'center', textAlign : 'center' }}>
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.Utiva offers a wide variety of program
         Bayewu kamal offers a wide variety of programs and courses and led by
          leading industry experts.
        </p>
        <Link style = {{textDecoration : 'none'}}to = 'biography'>
       
    </Link>
   </ motion.div>
  </div>
  </div>
)
}


export default Body1
