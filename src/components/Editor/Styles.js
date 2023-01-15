import styled from "styled-components";
import { font, color } from "../../utils/styles";

export const Wrapper = styled.div`
   margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
   display: inline-block;
   ${font.size(16)}
   color: ${color.textLight};
   margin-bottom: 4px;
`;

export const StyledError = styled.p`
   display: flex;
   align-items: center;
   color: ${color.warning};
   order: 2;
   ${font.size(14)};
   font-style: inherit;
   line-height: 1.33333;
   display: flex;
   margin-top: 4px;
`;
