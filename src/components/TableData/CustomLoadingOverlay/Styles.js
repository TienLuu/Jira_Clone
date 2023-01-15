import styled, { keyframes } from "styled-components";
import { color, font } from "../../../utils/styles";

const rotateOne = keyframes`
  
      0% {
         transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
      }

      100% {
         transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
      }
      `;

const rotateTwo = keyframes`
      0% {
         transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
      }

      100% {
         transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
      }
      `;

const rotateThree = keyframes`
0% {
         transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
      }

      100% {
         transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
      }
   `;

export const Wrapper = styled.div`
   position: absolute;
   z-index: 2;
   width: 100%;
   height: 100%;
   padding: 20px 0 10px;
   display: flex;
   align-items: center;
   justify-content: center;
   ${font.size(24)}
   color: ${color.textDark};
`;

export const LoaderWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 30px;
   justify-content: center;
   white-space: nowrap;

   & .inner:nth-child(1) {
      left: 0%;
      top: 0%;
      animation: ${rotateOne} 1s linear infinite;
      border-bottom: 3px solid ${color.textDark};
   }

   & .inner:nth-child(2) {
      right: 0%;
      top: 0%;
      animation: ${rotateTwo} 1s linear infinite;
      border-right: 3px solid ${color.textDark};
   }

   & .inner:nth-child(3) {
      right: 0%;
      bottom: 0%;
      animation: ${rotateThree} 1s linear infinite;
      border-top: 3px solid ${color.textDark};
   }
`;

export const Overlay = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.1);
`;

export const Loader = styled.div`
   position: absolute;
   top: calc(50% - 60px);
   left: calc(50% - 32px);
   width: 64px;
   height: 64px;
   border-radius: 50%;
   perspective: 800px;
`;

export const LoaderInner = styled.div`
   position: absolute;
   box-sizing: border-box;
   width: 100%;
   height: 100%;
   border-radius: 50%;
`;
