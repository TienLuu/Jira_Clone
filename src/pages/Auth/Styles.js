import styled from "styled-components";

import imageBackgroundLeft from "../../assets/images/default_left.e74de3ec.svg";
import imageBackgroundRight from "../../assets/images/default_right.6ece9751.svg";
import { mixin } from "../../utils/styles";

export const AuthPage = styled.div`
   display: flex;
   width: 100%;
   min-height: 100%;
   flex-direction: column;
`;

export const AuthPageInner = styled.div`
   display: flex;
   flex: 1 1 auto;
`;

export const Wrapper = styled.div`
   min-width: 0px;
   flex: 1 1 auto;
`;

export const BackgroundImg = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   z-index: -1;
   background: rgb(255, 255, 255);
   background-color: rgb(250, 251, 252);

   @media (min-width: 704px) {
      ${mixin.backgroundImageSym(imageBackgroundLeft, imageBackgroundRight)}
      background-size: calc(((100vw - 400px) / 2) - 32px),
         calc(((100vw - 400px) / 2) - 32px), cover;
   }

   @media (min-width: 1200px) {
      background-size: 368px, 368px;
   }
`;

export const Container = styled.div`
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const Main = styled.div`
   display: flex;
   flex-direction: column;
   width: 320px;
   padding: 0px 8px;
   margin: 0 auto 24px;
   background: transparent;
   border-radius: 3px;
   color: rgb(94, 108, 132);

   @media (min-width: 704px) {
      width: 400px;
      padding: 32px 40px;
      background: rgb(255, 255, 255);
      ${mixin.boxShadowDropdown}
   }
`;

export const Footer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   background: transparent;
   color: rgb(107, 119, 140);
   line-height: inherit;
   padding: 16px 0px;
   margin: 0px auto;

   @media (min-width: 704px) {
      padding-bottom: 5px;
   }
`;

export const Text = styled.span`
   color: rgb(107, 119, 140);
   text-align: center;
   font-size: 14px;
`;
