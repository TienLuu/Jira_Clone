import styled from "styled-components";
import { font, color } from "../../../utils/styles";

export const Wrapper = styled.div`
   label {
      ${font.size(14)}
      color: ${color.primary};
      margin-bottom: 4px;
   }
`;

export const Container = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
   color: ${color.primary};

   .clockIcon {
      ${font.size(18)}
      color: ${color.primary};
   }
`;

export const ProgressBar = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;

export const ProgressInfo = styled.div`
   display: flex;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   line-height: 1;
   margin-top: 3px;
   ${font.size(14)}
`;
