import React , {useState}from 'react'
import Footer from '../components/Footer';
import achie from '../components/img/achieve.png'
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar/SideBar"
import pic from '../../src/components/img/const.jpg'
import pics from '../../src/components/img/work1.jpg'
import './style.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
import Modal from '../Modal/Modal';


function WorksPage() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = useState(null)

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const work = [
    {
      avatar : '/img/w1.jpg',
     title  : " CONSTRUCTION OF RASAKI STR.",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    
    },
    {
      avatar : '/img/ala.jpg',
     title  : "CONSTRUCTION OF BURIHMOH STR.",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    },
    {
      avatar : '/img/ala.jpg',
     title  : "CONSTRUCTION OF ALAKOTO STR.",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    }
  ]




  const education = [
    {
      img : '/img/sch.jpg',
     title  : "CONSTRUCTION OF AJIF SCHOOL",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    
    },
    {
      img : '/img/iba.jpg',
     title  : "CONSTRUCTION OF IBAFON SCHOOL",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    },
    {
      img : '/img/ayo.jpg',
     title  : " CONSTRUCTION OF AYODELE SCHOOL",
     text : "This special report summarizes some of our completed research activities to date.",
     view : "View More"
    }
  ]





  

  return (
    

    <>

    <div style = {{marginTop : '80px'}}>
      <div style = {{marginTop : '-30px'}} >
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      </div>


      { selected && <Modal selected = {selected} setSelected = {setSelected}/>}  
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
                  }} style = {{display : 'flex', flexWrap : 'wrap', width : '100vw', justifyContent : 'center', alignItems :'center', marginTop : 'px'}}>
           <div style = {{height : '400px', width : '100vw'}}>
             <img style = {{height : '100%', width : '100%', objectFit : 'cover'}} src = {pic}/>
           </div>
             </motion.div>
         <div style ={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}><h3 style ={{marginTop :'100px'}}> PROJECTS ON ROADS AND DRAINAGE</h3>
        </div>
        <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', width : '100vw'}}>



          <p style = {{width : '1000vw', height : '200px', padding : '50px', textAlign : 'center', marginTop : '-130px', fontFamily : 'p'}}>      Provision of Old Age Grant/Social benefit allowance to 300 persons of 70years and above selected within the LGA from 2009 till date.
Inauguration of additional 100 beneficiaries for the Council old age grant.
Sponsoring 365 Youths, Men and Women in the council area to acquire skills in Soap making, Cosmetology, Gele Tying, Paint Production, Decoration, Insecticide Production, Beads & Hats making.
Empowering 210 citizens of the council area with various materials, tools and equipment to enhance value of their businesses/occupations.
Provision of monthly financial support to So-said rehabilitation home
          
          
          
          </p>
        </div>


        <div className = 'general_card6' >
          {work.map(({ avatar,title, text, view})=>(
              
              
            <div  className = 'carding1'>
            <div className = 'get_container4'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'cover', opacity : '0.2', overflow : 'hidden'}} 
         onClick = {()=>{
          setSelected(avatar) }}
           src = {avatar}/>
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>{title}</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px', fontSize : '14px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>


                <button className = 'buttm' style = {{marginTop : '-100px'}} onClick = {()=>{
                      setSelected(avatar) 
                  }}>view Image</button>
      </div>

           ))}



          

 
         </div> 


                  <div style ={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '40PX'}}>

                   <h3 className ="project">EDUCATIONAL PROJECTS</h3>

                </div>


                <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', width : '100vw'}}>



<p style = {{width : '100vw', height : '200px', padding : '50px', textAlign : 'center', marginTop : '-130px', fontFamily : 'p'}}>  
Provision of Old Age Grant/Social benefit allowance to 300 persons of 70years and above selected within the LGA from 2009 till date.
Inauguration of additional 100 beneficiaries for the Council old age grant.
Sponsoring 365 Youths, Men and Women in the council area to acquire skills in Soap making, Cosmetology, Gele Tying, Paint Production, Decoration, Insecticide Production, Beads & Hats making.
Empowering 210 citizens of the council area with various materials, tools and equipment to enhance value of their businesses/occupations.
Provision of monthly financial support to So-said rehabilitation home



</p>
</div>

<div className = 'general_card12' >
          {education.map(({title, text, view, img})=>(
              
              
            <div  className = 'carding9'>
            <div className = 'get_container9'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'contain', opacity : '0.2', overflow : 'hidden'}} src= {img} onClick = {()=>{
                      setSelected(img) 
                  }}/>
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>{title}</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>
                  
                <button className = 'buttm' style = {{marginTop : '-100px'}} >View Image</button>
              
                
          
      </div>

           ))}



          

 
   </div> 






                  <div style ={{display : 'flex', justifyContent : 'center', alignItems : 'center', marginTop : '40PX'}}>

                   <h3 className ="project">SECURITY PROJECT</h3>

                </div>


                <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center', height : '300px', width : '100vw'}}>



<p style = {{width : '100vw', height : '200px', padding : '50px', textAlign : 'center', marginTop : '-130px', fontFamily : 'p'}}>  
Provision of Old Age Grant/Social benefit allowance to 300 persons of 70years and above selected within the LGA from 2009 till date.
Inauguration of additional 100 beneficiaries for the Council old age grant.
Sponsoring 365 Youths, Men and Women in the council area to acquire skills in Soap making, Cosmetology, Gele Tying, Paint Production, Decoration, Insecticide Production, Beads & Hats making.
Empowering 210 citizens of the council area with various materials, tools and equipment to enhance value of their businesses/occupations.
Provision of monthly financial support to So-said rehabilitation home



</p>
</div>

<div className = 'general_card9' >
          {work.map(({title, text, view, avatar})=>(
              
              
            <div  className = 'carding9'>
            <div className = 'get_container9'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'contain', opacity : '0.2', overflow : 'hidden'}} src= {avatar} />
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>2014 AJIF SCHOOOL CONSTRUCTION</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>

              
                <button className = 'buttm' style = {{marginTop : '-100px'}} onClick = {()=>{
                      setSelected(avatar) 
                  }}>View More</button>
      </div>

           ))}



          

 
   </div> 


















      </div>
     
        
     <div className = 'footing' style = {{marginTop : 'px'}}>
       <Footer />
       </div>
      </>
  )
}

export default WorksPage
