import React from "react";
import image from '../../components/img/remove.png'
// import {
//   FaFacebook,
//   ,
//   FaTwitter,
//   FaLinkedin,
//   FaInstagram,
// } from "react-icons/fa";

import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaAdobe,
  FaLinkedin,
  FaInstagram,
  FaMagento,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle   style = {{cursor : 'pointer'}}> HOME </FooterLinkTitle>
       
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle  style = {{cursor : 'pointer'}}> BIOGRAPHY </FooterLinkTitle>
        
         
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle style = {{cursor : 'pointer'}}> WORKS </FooterLinkTitle>
          
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle style = {{cursor : 'pointer'}}> ACHIEVEMENTS </FooterLinkTitle>
            
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
      
          <SocialMediaWrap style = {{textDecoration : 'none'}}>
 
            <SocialMediaLogo style = {{textDecoration : 'none'}} onClick={toggleHome}>
            <img style = {{height : '40px', marginLeft : '-20px'}} src = {image}/>
              BAYEWU KAMAL
            </SocialMediaLogo>
            <WebsiteRight
              href="www.brighterdayscodelab.com.ng"
              target="new page"
            >
              Developed by CodeLab 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
                href="https://www.facebook.com/groups/brighterdayscodelab"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>

              <SocialIconLink
                href="https://twitter.com/search?q=brighterdays_codelab&src=typed_query"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>

              <SocialIconLink
                href="https://www.instagram.com/brighterdays_codelab/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
