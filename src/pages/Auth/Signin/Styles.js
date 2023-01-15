import styled from "styled-components";
import { color } from "../../../utils/styles";

export const Text = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   &.title {
      font-size: 16px;
      color: rgb(94, 108, 132);
      font-weight: bold;
      margin-bottom: 16px;
   }

   &.normal {
      margin-top: 16px;
      opacity: 0.8;
      font-size: 12px;
      text-transform: uppercase;
   }
`;

export const StyledLink = styled.div`
   margin-top: 28px;
   padding: 14px 0;
   border-top: 1px solid ${color.borderLightest};
   text-align: center;
   font-size: 15px;
   font-weight: 400;
   color: ${color.textDarkest};

   a {
      margin-right: 5px;
      color: ${color.primary};
      transition: color 0.3s ease;

      &:hover {
         text-decoration: underline;
      }
   }
`;
