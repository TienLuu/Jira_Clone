import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { font, sizes, color, mixin, zIndexValues } from "../../../utils/styles";
import Logo from "../../../components/SVG/JiraLogo";

export const NavLeft = styled.aside`
   z-index: ${zIndexValues.navLeft};
   position: relative;
   top: 0;
   left: 0;
   overflow-x: hidden;
   height: 100vh;
   font-weight: 500;
   width: ${sizes.appNavBarLeftWidth}px;
   background: ${color.backgroundDarkPrimary};
   ${mixin.hardwareAccelerate}
   transition: all 0.1s ease;

   &:hover {
      width: 200px;
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.6);
   }
`;

export const LogoLink = styled(NavLink)`
   display: block;
   position: relative;
   left: 0;
   margin: 20px 0 10px;
   transition: left 0.1s;
`;

export const StyledLogo = styled(Logo)`
   display: inline-block;
   margin-left: 8px;
   padding: 10px;
   ${mixin.clickable}
`;

export const Bottom = styled.div`
   position: absolute;
   bottom: 20px;
   left: 0;
   width: 100%;
`;

export const Item = styled.div`
   position: relative;
   width: 100%;
   height: 42px;
   line-height: 42px;
   padding-left: 64px;
   color: #deebff;
   transition: color 0.1s;
   ${mixin.clickable}
   &:hover {
      background: ${mixin.rgba("#fff", 0.1)};
   }
   i {
      position: absolute;
      left: 18px;
   }
`;

export const ItemText = styled.div`
   position: relative;
   right: 12px;
   visibility: hidden;
   opacity: 0;
   text-transform: uppercase;
   transition: all 0.1s;
   transition-property: right, visibility, opacity;
   ${font.bold}
   ${font.size(12)}
  ${NavLeft}:hover & {
      right: 0;
      visibility: visible;
      opacity: 1;
   }
`;
