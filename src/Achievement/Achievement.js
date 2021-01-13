import React from 'react'
import Footer from '../components/Footer';
import achie from '../components/img/achieve.png'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar/SideBar"
import pic from '../../src/components/img/award.jpg'
import './style.css'
import {motion} from 'framer-motion'


function Achievement() {

  const fadeLeft = {
    hidden : {opacity : 2, y: 100},
    visible : {opacity : 5, y : 0}
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
    },
  ]


  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <div style = {{marginTop : '80px'}}>
      <div style = {{marginTop : '-30px'}} >
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      </div>
        <motion.div 
                  initial = "hidden"
                  animate = "visible"
                  variants = {{
                    hidden : {
                      scale : .3,
                      opacity : 0
                    },
                    visible :{
                      scale : 1,
                      opacity : 1,
                      transition :{
                        delay : .3
                      }
                    }
                  }} style = {{display : 'flex', flexWrap : 'wrap',height  : '100vh', width : '100vw', justifyContent : 'center', alignItems :'center', fontFamily : 'poppins'}}>
           <div style = {{height : '400px', width : '100vw'}}>
             <img style = {{height : '100%', width : '100%', objectFit : 'cover'}} src = {pic}/>
           </div>
           <div style = {{marginTop : '20px'}}>
             <h4 style = {{fontWeight : 'bold'}}>AWARDS RECIEVED FROM (2000 - 2012)</h4>
           </div>
           <div className = 'general_card2'>
        
     {
       app.map(({icon, title, body})=>(
        <div  className = 'card-container2'>
        <div className = 'get_container2'>
        <div className = 'image-container2'>
          <img src ={achie} alt = '' />
        </div>
          <div className = 'year1'> 2012</div>
       
           <div className = 'card-title2'>
               <h5>Best Councellor</h5>
           </div>
           <div className = 'card-body2'>
               <p style = {{textAlign : 'center'}}> is a long established fact that a reader will be distracted
                is a long established fact that a reader will be distracted  
                </p>
           </div>
           </div>
          </div>
       ))
     }
      </div>

              





           </motion.div>
           </div>
        
     <div className = 'footing' style = {{marginTop : '670px'}}>
       <Footer />
       </div>
      </>
 
  );
}

export default Achievement
