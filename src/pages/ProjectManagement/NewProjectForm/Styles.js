import styled from "styled-components";
import { font, color, mixin } from "../../../utils/styles";

export const StyledButton = styled.div`
   position: absolute;
   top: 20px;
   right: 0px;
`;

export const StyledModal = styled.div`
   position: fixed;
   z-index: 11;
   background-color: #fff;
   top: 0;
   min-height: 100vh;
   right: 0;
   width: min(500px, 100%);
   box-shadow: rgb(0 0 0 / 15%) 0px 0px 20px 0px;
   transform: translateX(110%);
   transition: all 0.3s ease;

   &.open {
      transform: translateX(0);
   }
`;

export const CategoryItem = styled.div`
   padding: 8px 12px;
   ${font.size(14)}
`;

export const ModalContainer = styled.div`
   padding: 25px 35px 60px;
   height: 100vh;
   overflow-y: overlay;
`;

export const Title = styled.div`
   margin-bottom: 32px;
`;

export const TextFieldWrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 12px;
`;

export const FormControl = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`;

export const ButtonClose = styled.button`
   position: absolute;
   ${font.size(25)}
   color: rgb(94, 108, 132);
   top: 10px;
   left: -30px;
   width: 50px;
   height: 50px;
   border-radius: 3px;
   background: #fff;
   border: 1px solid rgb(223, 225, 230);
   box-shadow: rgb(0 0 0 / 10%) 0px 5px 10px 0px;
   ${mixin.clickable}
   transition: all 0.3s ease;

   &:hover {
      background-color: ${color.backgroundLight};
   }

   &:active {
      background-color: ${color.backgroundDarkPrimary};
   }

   @media (max-width: 576px) {
      & {
         left: unset;
         right: 20px;
      }
   }
`;

export const Overlay = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 10;
   background-color: ${mixin.rgba("#000", 0.2)};
   visibility: hidden;
   opacity: 0;
   pointer-events: none;
   transition: all 0.3s ease;

   &.open {
      visibility: visible;
      opacity: 1;
      pointer-events: auto;
   }
`;
