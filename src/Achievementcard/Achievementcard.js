import React from 'react'
import achie from '../components/img/achieve.png'
import './style1.css'
import {motion} from 'framer-motion'

function Achievementcard() {
  const fadeLeft = {
    hidden : {opacity : 0, x: -100},
    visible : {opacity : 1, x : 0}
  }
  const app =  [
    {
    icon : "img/bo.jpg",
    title : "Rasaki Road Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    icon : 'img/bo1.jpg',
    title : "Babatunde Road Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    icon : 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    icon: 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    icon: 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    icon: 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
    
  ]

  return (
    <>
    <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '200px'}}>
      <h3 className = 'going' style = {{fontFamily : 'poppins', fontWeight : 'bold'}}>ACHIEVEMENTS/AWARDS</h3></div>
    < motion.div className = 'general_card1' >
  
     {
       app.map(({icon, title, body})=>(
        < motion.div  className = 'card-container1'  
        whileHover = {{scale : 1.05}}
         variants = {fadeLeft}
         initial = "hidden"
         animate = "visible"
         transition = {{duration : 1}}
    
        >
        <div className = 'get_container'>
        < motion.div className = 'image-container1' 

        
        >
        
             
           
          <img src ={achie} alt = '' />
        </motion.div>
          <div className = 'year'> 2012</div>
       
           <div className = 'card-title1'>
               <h5>Best Councellor</h5>
           </div>
           <div className = 'card-body1'>
               <p style = {{textAlign : 'center'}}> is a long established fact that a reader will be distracted
                is a long established fact that a reader will be distracted  
                </p>
           </div>
           </div>
          </motion.div>
       ))
     }
      </motion.div>
      </>
  )
}

export default Achievementcard
