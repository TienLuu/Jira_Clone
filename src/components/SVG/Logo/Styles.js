import styled from "styled-components";
import { font, color } from "../../../utils/styles";

export const StyledLogo = styled.div`
   display: flex;
   font-weight: 700;
   align-items: center;
   justify-content: center;
   ${font.size(26)};
   color: ${(props) => (props.light ? color.textLogo : color.textDark)};

   &.large {
      padding: 40px 0px;
      font-size: 2rem;
      line-height: 32px;
   }
`;
