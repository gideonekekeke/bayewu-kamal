import React from 'react'
import './work.css'
import pix from '../../components/img/mud.jpg'
import pixs from '../../components/img/loading.png'

function Workcard() {
  const data = [
    {
    avatar : "img/bo.jpg",
    title : "Rasaki Road Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    avatar : 'img/bo1.jpg',
    title : "Babatunde Road Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    avatar : 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
    avatar : 'img/bo2.jpg',
    title : "School Construction",
    body : "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    }
  
  ]
  return (
    <>
      <div className = 'media_container' >
      <div  className = 'general_card'>
   
         <img  style = {{height : '100%', width : "100%"}}src = {pix}/>

     



   
    <div style = {{display : 'flex', justifyContent : 'center', alignItems : 'center'}}>
          <img  style = {{marginTop : '-590px', height : '590px'}}src = {pixs}/>
          </div>
       
    </div>
    <div className = 'recent' style = {{marginTop : '-420px',marginLeft : '250px'  ,fontWeight: 'bold', 
  fontSize: '30px', color : 'white'}}>RECENT WORKS

      <div style = {{marginLeft : '80px', fontSize : '60px'}}>4</div>
    </div>
    <div style = {{marginTop : '150px',marginLeft : '250px',  fontSize: '30px' ,fontWeight: 'bold', color : 'white'}}>PROJECTS DONE      <div style = {{  fontSize: '60px',marginLeft : '60px'}}>10</div>
    </div>

 





    <div style = {{marginTop : '-420px',marginLeft : '1020px'  ,fontWeight: 'bold', 
  fontSize: '30px', color : 'white'}}>ACHIEVEMENTS

      <div style = {{marginLeft : '80px', fontSize : '60px'}}>10</div>
    </div>
    <div style = {{marginTop : '150px',marginLeft : '1100px',  fontSize: '30px' ,fontWeight: 'bold', color : 'white'}}>AWARDS
      <div style = {{  fontSize: '60px',marginLeft : '30px'}}>20</div>
    </div>
  
     


  </div>









          
{/*       
            <div key = {id} className = 'card-container'>

            <div className = 'image-container'>
              <img src ={pix} alt = '' />
            </div>
           
               <div className = 'card_title'>
                   <h4 style = {{fontSize : '15px'}}>Raskaki Road Construction</h4>
               </div>
               <div className = 'card-body'>
                   <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
               </div>
        
              <button style = {{backgroundColor : 'coral', color : 'white', border : 'none', borderRadius : '5px' }}>Read More</button>

            </div>
  
          ))
        }
         </div> */}
    </>
  )
}


export default Workcard
