import styled from "styled-components";
import { color, font } from "../../../../utils/styles";

export const Wrapper = styled.div``;

export const InputWrapper = styled.div`
   display: flex;
   align-items: flex-start;
   gap: 12px;
   margin-top: 24px;
`;

export const InputGroup = styled.div`
   flex: 1;

   &.visible {
      .inputControl {
         display: flex;
      }

      .inputHelper {
         display: none;
      }

      .input {
         min-height: 60px;
      }
   }
`;

export const InputHelper = styled.p`
   padding-top: 8px;
   ${font.size(13)}
   color: ${color.textDarkest};

   span {
      font-weight: 700;
   }
`;

export const InputControl = styled.div`
   display: none;
   align-items: center;
   gap: 12px;
   padding-top: 10px;
`;

export const CommentList = styled.div`
   margin-top: 25px;
   display: flex;
   gap: 12px;
   flex-direction: column;
   align-items: flex-start;
   max-height: 450px;
   overflow-y: scroll;
`;
