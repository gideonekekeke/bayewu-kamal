import React from "react";
import Body from "./Body/Body";
import ModalButton from "./Body/Body";
import Body1 from "./Body1/Body1";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import { HeroBg } from "./HeroSection/HeroElement";
import NavBar from "./NavBar";
import SideBar from "./SideBar/SideBar";
import Workcard from "./Workcard/Workcard";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
       <Body/>
        
   
      <Footer />
   
    </div>
  );
}

export default Home;
