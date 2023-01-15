import styled from "styled-components";
import { font, color } from "../../utils/styles";

export const Wrapper = styled.div`
   display: flex;
   flex: 1 1;
   flex-direction: column;

   .table {
      border: none !important;
      justify-content: center;
      min-height: 400px;
      height: 100%;

      *[class*="MuiDataGrid"] {
         ${font.size(16)}
         color: ${color.textDarkest};
      }

      .row {
         border-color: red;
         display: flex;
      }

      .cell {
         border-color: ${color.borderLight};

         &:focus {
            outline: none !important;
         }
      }

      [class*="cellContent"] {
         -webkit-box-orient: vertical !important;
         -webkit-line-clamp: 3 !important;
         display: -webkit-box !important;
      }
   }
`;
