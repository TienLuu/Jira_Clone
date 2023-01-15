import styled from "styled-components";
import { font, color } from "../../../utils/styles";

export const Wrapper = styled.div`
   .assignmentBtnWrapper {
      padding: 0;
      min-height: fit-content;

      &[class~="selecting"] {
         outline: 2px solid #4c9aff;
         background-color: #fff;
      }
   }
`;

export const WrapperMember = styled.div`
   display: flex;
   width: 100%;
   flex-wrap: wrap;
   align-items: center;
   min-height: 32px;
   padding: 10px 5px 5px 10px;
   border-radius: 4px;
   ${font.size(14)}
   width: 100%;
`;

export const Member = styled.div`
   display: flex;
   align-items: center;
   background-color: #fff;
   border: 1px solid ${color.borderLight};
   border-radius: 3px;
   padding: 6px 4px;
   margin: 0 15px 5px 0;
   ${font.size(14)}
   color: ${color.textDark};

   span {
      ${font.size(14)}
      padding: 0 3px 0 6px;
      line-height: 1.2;
   }
`;

export const ButtonRemove = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   cursor: pointer;
   transition: all 0.1s ease;

   &:hover {
      background-color: ${color.backgroundLight};
   }
`;

export const ButtonAssignment = styled.div`
   display: flex;
   align-items: center;
   gap: 3px;
   margin-bottom: 5px;
   color: ${color.primary};

   span {
      ${font.size(14)}
   }

   &:hover {
      span {
         text-decoration: underline;
      }
   }
`;

export const Assignment = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 4px 8px;

   &.alreadySelect {
      display: none;
   }
`;
