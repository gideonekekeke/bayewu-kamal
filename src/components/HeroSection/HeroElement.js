import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
  
  

`;

export const HeroBg = styled.div`

`;


export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const HeroP = styled.p`


`;

export const HeroBtnWrapper = styled.div`
  margin-top: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
 
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`

`;

export const HeroContent = styled.div`

`;

// export const HeroButton = styled(Link)`
//   background: ${({ primary }) => (primary ? "#EFAD28" : "#fff")};
//   border-radius: 50px;
//   white-space: nowrap;
//   padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
//   color: ${({ dark }) => (dark ? "#010606" : " black")};
//   font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//   outline: none;
//   border: none;
//   cursor: point;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: all 0.2s ease-in-out;
//   text-transform: uppercase;
//   font-weight: bold;
//   text-decoration: none;

//   &:hover {
//     transition: all 0.2s ease-in-out;
//     background: ${({ primary }) => (primary ? "#fff" : "#EFAD28")};
//     font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
//     color: ${({ dark }) => (dark ? "white" : " #fff")};
//     cursor: pointer;
//   }
// `;
