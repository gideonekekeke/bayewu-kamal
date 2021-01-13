import React from 'react'
import NavBar from "../components/NavBar";
import SideBar from '../components/SideBar/SideBar'
import Footer from '../components/Footer'
import picture from '../components/img/nepa.jpg'
import face from '../components/img/facebook.png'
import inst from '../components/img/instagram.png'
import you from '../components/img/youtube.png'
import './style.css'
import pic from '../components/img/change.jpg'
import {motion} from 'framer-motion'
import arro from '../components/img/myarrow.png'
import {Link} from 'react-router-dom'

function Biography() {
  const fadeLeft = {
    hidden : {opacity : 0, x: -100},
    visible : {opacity : 1, x : 0}
  }
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

    <div className = 'bio_container'>
     
 
      < motion.div
        
      className = 'bio_imageback' style = {{display : 'flex', flexWrap : 'wrap'}}>
         <div >
           < motion.div
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
                        delay : .1
                      }
                    }
                  }}
           className = 'bio_background'>
             <img src= {picture}/>
             
           </motion.div>
            

         </div>

         < motion.div className='BodyArrange1'
             variants = {fadeLeft}
                initial = "hidden"
                animate = "visible"
                transition = {{duration : 1}}

         
         
         >
      <div className='body1'>
        <div className='body_content1'>
          <div className  = 'styling' style = {{marginLeft : '100px', fontFamily : 'poppins'}}>ABOUT</div>
          <p className = 'contex' style = {{marginLeft : '100px', width : '800px', fontFamily : 'poppins', fontSize : '14px', lineSpacing : '100px', wordBreak : 'normal', wordWrap : 'break-word', lineHeight : '250%', height : '20px' }}>
          HON. KAMAL AYINDE BAYEWU
Born on 8th May, 1962. He obtained his First School Leaving Certificate (FSLC) in 1974 at Ansar-Un-Deen Primary School, Alakoro, Lagos and his WASSCE in 1979 at Moslem Council College, Babanloma, Kwara State. 
He proceeded to Lagos State Polytechnic in 1986 where he bagged both his OND in General Agriculture in 1988 and HND in Agricultural Economics & Extension in 1991. He qualified as a Chartered Banker in 1994 and proceeded to Enugu State University (ESUT) Business School where he obtained a Masters in Business Administration (MBA) specialising in Banking and Finance in 2001. Kamal enrolled for a Short Management Programme (SMP) with the Prestigious Lagos Business School (LBS) and graduated in 2006. Thereafter, he proceeded to University of Ibadan (The Premier University) where graduated with Masters in Managerial Psychology (MMP) in 2007.
He started his career as an Accounts Clerk with Thermocool Engineering Ltd {1980 - 1981} and Senior Clert at Bank of the North Ltd {1981 - 1986}. He had his Industrial attachment with Nigerian Agricultural and Cooperative Bank (NACB) 1988/89 and served (NYSC) with Central Bank of Nigeria Enugu. 1991/92.
<br/>

<p style = {{width : '1130px', marginTop : '50px'}}>
After his Youth Service, Bayewu joined Universal Trust Bank Limited (UTB) as Graduate Trainee in 1993. He graduated as the overall best trainee in 1994 and was absorbed as an Officer in Special Assests Group of the Bank. While in UTB between year 1993 to 2000 he worked as, officer Loan Recovery, Head of Credit Administration -Risk Management Department, Head Loan Recovery Department.
He later joined Intercontinental Bank Plc as an Assistant Manager and worked as Deputy Head Risk Management Department, Head, Loan Recovery Department, Branch Manager Kaduna Branch, Branch Manager Toyin Street branch, Branch Manager Ikorodu branch, Head commercial banking Group  Ikeja branch, Group Head Remedial Management Group, Regional Risk Manager Lagos Central Region and Lagos West Regional Risk  Manager. He resigned from Intercontinental Bank PLC as a Senior Manager in 2008. 
He served as the Executive Chairman Ajeromi-Ifelodun LGA between 2008 to 2014 for two terms. During his tenure as the Executive Chairman, the internal generated revenue of the local government was raised from 30 million naira annually in 2008 to 160 million annually from 2009 - 2014.
SOCIAL DEVELOPMENT AND EMPOWERMENT PROGRAMMES:
Provision of Old Age Grant/Social benefit allowance to 300 persons of 70years and above selected within the LGA from 2009 till date.
Inauguration of additional 100 beneficiaries for the Council old age grant.
Sponsoring 365 Youths, Men and Women in the council area to acquire skills in Soap making, Cosmetology, Gele Tying, Paint Production, Decoration, Insecticide Production, Beads & Hats making.
Empowering 210 citizens of the council area with various materials, tools and equipment to enhance value of their businesses/occupations.
Provision of monthly financial support to So-said rehabilitation home

HOBBIES
My hobbies include community development & human capital development, engaging in intelligent discussion and blazing the trail of possibilities.
AREAS OF SPECIALISATION
Banking and Financial Management
Public Administration
Local Government Administration
Agriculture
Conflict resolution and 
Negotiation
He contested the 2015 and 2019 House of Representatives elections, but was asked to step down by the party leadership. He is happily married with lovely children, and he lives in Ajegunle, Lagos with his family.
This programme is supported by: Ifelodun LCDA. VicJames Apartments. GOC Water. GODSOWN LAB LTD. Hall of Fame
</p>

          </p>
        </div>

        <img className = 'imaging' style = {{marginLeft : '300px'}} src={pic} />
      

         </div>
         </motion.div>

      </motion.div>











    
      
    </div>
    </div>

<div className = 'footing' style = {{marginTop : '450px'}}>
<Footer />
</div>
   
</>
  )
}

export default Biography
