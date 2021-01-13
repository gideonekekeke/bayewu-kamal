import React from 'react'
import pic from '../components/img/work1.jpg'
import './style.css'
import {Link} from 'react-router-dom'



function Working() {
const work = [
  {
   title  : "2014 AJIF SCHOOOL CONSTRUCTION",
   text : "This special report summarizes some of our completed research activities to date.",
   view : "View More"
  },
  {
   title  : "2014 AJIF SCHOOOL CONSTRUCTION",
   text : "This special report summarizes some of our completed research activities to date.",
   view : "View More"
  },
  {
   title  : "2014 AJIF SCHOOOL CONSTRUCTION",
   text : "This special report summarizes some of our completed research activities to date.",
   view : "View More"
  }
]


  return (
    <>
 
         <div className = 'stay' style ={{display : 'flex', justifyContent : 'center', alignItems : 'center'}}><h3 className = 'stay'style ={{marginTop :'200px', fontFamily : 'poppins', fontWeight : 'bold'}}> PROJECTS DONE</h3>
        </div>



        <div className = 'general_card2' >
          {work.map(({title, text, view})=>(
              
              
            <div  className = 'carding'>
            <div className = 'get_container2'>
           < div className = 'image'>

         <img  style = {{height :  '100%', width : '100%', objectFit : 'contain', opacity : '0.2', overflow : 'hidden'}} src= {pic} />
         <div style = {{ color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5 style = {{marginTop : '-490px'}}>2014 AJIF SCHOOOL CONSTRUCTION</h5>
                 </div>
          </div>
        
       </div>
       <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '5px', marginTop : '-450px'}}></div>
                
                <div style = {{color : 'white', width : '800px', padding : '32px', marginTop : '-350px', fontFamily : 'poppins', fontSize : '15px'}}>This special report summarizes some of our completed research activities to date  completed research activities </div>

              
              
               
                  <button className = 'buttm' style = {{marginTop : '-100px', zIndex : '999'}} onClick = {()=>{
                    console.log('i am clicked')
                  }}>View More</button>
      </div>

           ))}

 
   </div> 

   


{/*         
        <div style={{height  : '400px', width : '1200px', marginLeft : '160px' , display : 'flex', background : 'red',flexWrap : 'wrap'}}>
     {
       work.map(({title, text, view})=>(
   
        
            <div style = {{height : '400px', width : '1200px', background : 'blue'}}>
            <div style = {{width : '450px', height : '290px', backgroundColor : 'black', borderRadius : '2px solid white',   boxShadow: "0px 0px 3px 0px"}}>
               <img style = {{height : '100%', width : '100%', opacity : '0.2'}} src = {pic}/>
                 <div style = {{marginTop : '-250px', color : 'white', zIndex : '999999', display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
                   <h5>2014 AJIF SCHOOOL CONSTRUCTION</h5>
                 </div>
                 <div style = {{width : '400px',
                height : '1px', background : 'white', marginLeft : '30px', marginTop : '10px'}}></div>
      
                <div style = {{color : 'white', width : '500px', padding : '40px'}}>This special report summarizes some of our completed research activities to date.</div>
                <div className = 'border' style = {{height : '50px', width : '100px', borderRadius : '2px solid white', display : 'flex', justifyContent : 'center', alignItems : 'center', color : 'white', marginLeft : '170px'}}>View More</div>
            </div>
            </div> */}
     
     

    </>




)
}

export default Working












