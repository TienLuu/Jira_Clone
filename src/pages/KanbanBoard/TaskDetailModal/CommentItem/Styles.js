import styled from "styled-components";
import { color, font } from "../../../../utils/styles";

export const Item = styled.div`
   display: flex;
   flex-direction: row;

   width: 100%;
   gap: 12px;

   &.owner {
      flex-direction: row-reverse;

      .inputWrapper {
         align-items: flex-end;
      }
   }

   &.editing {
      .commentContent {
         display: none;
      }

      .editControl {
         display: none;
      }

      .inputControl {
         display: flex;
      }
   }

   .input {
      ${font.size(15)}
      color: ${color.textDarkest};
      font-weight: 400;
      padding: 8px 12px;
      height: auto;
      width: 100% !important;
      border-color: transparent;
      background-color: transparent;

      &:hover {
         background-color: ${color.backgroundDarkPrimary};
      }

      ::placeholder {
         color: rgba(0, 0, 0, 0.87);
         font-weight: 500;
      }
   }
`;

export const InputWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   max-width: 60%;
   flex: 1;
`;

export const CommentOwner = styled.p`
   ${font.size(15)}
   color: ${color.textDarkest};
   padding: 0 12px 10px 0;
`;

export const CommentContent = styled.p`
   width: fit-content;
   max-width: 100%;
   word-break: break-all;
   padding: 8px 12px;
   border-radius: 4px;
   border: 1px solid ${color.borderLightest};
   ${font.size(15)}
`;

export const EditControl = styled.div`
   display: flex;
   margin-top: 10px;
   align-items: center;
   gap: 8px;
   color: ${color.textLight};

   button {
      background-color: transparent;
      color: ${color.textLight};
      ${font.size(13)}
      cursor: pointer;

      &:hover {
         text-decoration: underline;
      }
   }

   span {
      line-height: 1;
   }
`;

export const InputControl = styled.div`
   display: none;
   align-items: center;
   gap: 12px;
   padding-top: 10px;
`;
