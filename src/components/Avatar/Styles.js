import styled from "styled-components";
import { font, mixin } from "../../utils/styles";

export const Image = styled.div`
   display: inline-block;
   position: relative;
   width: ${(props) => props.size}px;
   height: ${(props) => props.size}px;
   border-radius: ${(props) => (props.square ? 0 : 100)}%;
   ${(props) => mixin.backgroundImage(props.avatarUrl)};

   span {
      position: absolute;
      display: inline-block;
      top: 40px;
      left: 50%;
      transform: translateX(-50%);
      ${font.size(14)}
      color: #fff;
      border-radius: 3px;
      padding: 3px 6px;
      background-color: #6d6d6d;
      white-space: nowrap;
      opacity: 0.9;
      display: none;

      &:before {
         content: "";
         position: absolute;
         display: block;
         top: -5px;
         left: 50%;
         transform: translateX(-50%);
         border-right: 5px solid transparent;
         border-left: 5px solid transparent;
         border-bottom: 5px solid #6d6d6d;
      }
   }

   &:hover {
      span {
         display: block;
      }
   }
`;

export const Letter = styled.div`
   display: inline-block;
   width: ${(props) => props.size}px;
   height: ${(props) => props.size}px;
   border-radius: 100%;
   text-transform: uppercase;
   color: #fff;
   background: ${(props) => props.color};
   ${font.medium}
   ${(props) => font.size(Math.round(props.size / 1.7))}
  & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
   }
`;
