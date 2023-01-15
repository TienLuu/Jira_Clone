import styled from "styled-components";
import { color, font } from "../../../utils/styles";

export const Wrapper = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   gap: 20px;
   align-items: center;
   justify-content: center;
   ${font.size(28)}
   color: ${color.textDark};
`;
