import styled from "styled-components";
import { font, color } from "../../utils/styles";

export const Header = styled.header`
   padding: 10px 0;
   ${font.size(28)}
`;

export const Body = styled.div`
   padding: 10px 0;
   flex: 1;
   overflow-y: overlay;
`;

export const Footer = styled.div`
   padding: 10px 0;
`;

export const ButtonClose = styled.button`
   position: absolute;
   display: flex;
   align-items: center;
   justify-content: center;
   top: 16px;
   right: 16px;
   padding: 6px;
   background-color: transparent;
   border-radius: 50%;
   font-size: 2rem;
   line-height: 1;
   color: ${color.textDark};
   cursor: pointer;

   &:hover {
      color: ${color.textDarkest};
      background-color: ${color.backgroundLight};
   }
`;
