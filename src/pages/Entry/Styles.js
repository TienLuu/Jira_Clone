import styled, { keyframes } from "styled-components";
import { color } from "../../utils/styles";

const typewriter = keyframes`
   to {
    left: 100%;
   }
`;

const blink = keyframes`
   to {
    background: transparent;
   }
`;

export const Wrapper = styled.div`
   --typewriterSpeed: 4s;

   display: flex;
   align-items: center;
   justify-content: center;
   height: 100%;
   color: ${color.textLogo};
`;

export const Title = styled.h1`
   position: relative;

   &::before,
   &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
   }

   &::before {
      background: #fff;
      animation: ${typewriter} var(--typewriterSpeed) steps(23) forwards;
   }

   &::after {
      width: 4px;
      background: ${color.primary};
      animation: ${typewriter} var(--typewriterSpeed) steps(23) forwards,
         ${blink} 600ms steps(23) infinite;
   }
`;
