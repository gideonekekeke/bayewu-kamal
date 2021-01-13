import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../../src/components/img/B2.jpg'
import pic1 from '../../../src/components/img/bea.jpg'
import pic2 from '../../../src/components/img/pipu.jpg'
import Body1 from "../Body1/Body1";
import Workcard from '../Workcard/Workcard'
import Achievementcard from "../../Achievementcard/Achievementcard";
import Working from "../../Working/Working";


function Body() {
  return (
    <>
  <Carousel  style = {{zIndex : '-999', objectFit : 'cover'}}>
  <Carousel.Item style = {{height : '700px', objectFit : 'contain' }}>
    <img style = {{objectFit : 'cover'}}
      className="d-block w-100"
      src={pic}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 style = {{zIndex : '-999'}}>MAN OF EXCELLENCE</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height : '700px'}}>
    <img style = {{objectFit : 'cover', height : '900px' }}
      className="d-block w-100"
      src={pic1}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style = {{zIndex : '-999'}}>MAN OF GREATNESS</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style = {{height : '700px'}}>
    <img style = {{objectFit : 'cover'}}
      className="d-block w-100"
      src={pic}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style = {{zIndex : '-999', marginTop : '-100px'}}>MAN OF POWER</h3>
      <p style = {{zIndex : '-999'}}>Join The Move To Bring Ajegunle Dream to Reality</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


 <Body1/>

<Workcard/> 
<Achievementcard/>
<Working/>


</>
)
}



export default Body;
