import styled from "styled-components";
import { color, font, mixin } from "../../../utils/styles";

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   position: fixed;
   z-index: 10;
   top: 0;
   left: 0;
   right: 0;
   height: ${(props) => props.height}px;
   padding: 0 12px;
   background-color: #fff;

   &::after {
      content: "";
      position: absolute;
      height: 4px;
      top: 100%;
      right: 0px;
      left: 0px;
      background: linear-gradient(
         rgba(9, 30, 66, 0.13) 0px,
         rgba(9, 30, 66, 0.13) 1px,
         rgba(9, 30, 66, 0.08) 1px,
         rgba(9, 30, 66, 0) 4px
      );
   }
`;

export const StyledLogo = styled.div`
   ${mixin.clickable}
`;

export const Navigation = styled.div`
   height: 100%;
   background: #fff;

   @media (max-width: 768px) {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
      border-top: 1px solid ${color.borderLightest};
   }
`;

export const Nav = styled.ul`
   height: 100%;

   @media (max-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
   }
`;

export const NavItem = styled.li`
   position: relative;
   display: inline-flex;
   height: 100%;
   margin: 0 4px;
   min-width: 70px;
   justify-content: center;
   align-items: center;

   @media (max-width: 768px) {
      height: 40px;
      flex: 1 1;
      margin: 0;
   }

   &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      display: block;
      height: 3px;
      width: 0;
      z-index: 1;
      background-color: ${color.textLink};
      border-top-left-radius: 1px;
      border-top-right-radius: 1px;
      transition: all 0.3s ease;

      @media (max-width: 768px) {
         top: 0;
      }
   }

   &:has(.active)::after {
      left: 0;
      width: 100%;
   }

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 32px;
      padding: 0 4px;
      border-radius: 4px;
      ${font.size(15)}
      transition: all 0.3s ease;

      &:hover {
         background-color: ${color.backgroundLightest};
      }

      &.active {
         color: ${color.textLink};
      }

      @media (max-width: 768px) {
         height: 100%;
      }
   }
`;

export const MoreInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;

   & > a {
      @media (max-width: 500px) {
         display: none;
      }
   }
`;
