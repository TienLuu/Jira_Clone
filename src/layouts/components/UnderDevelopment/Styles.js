import styled from "styled-components";
import { color, font, mixin } from "../../../utils/styles";

export const Wrapper = styled.div`
   display: flex;
   height: 100%;
   min-width: 400px;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: ${color.textDarkest};
`;

export const Title = styled.div`
   ${font.size(30)}
   text-align: center;
   margin-bottom: 30px;
   opacity: 0.5;
   line-height: 1.2;
   font-weight: 300;

   h2 {
      ${font.size(50)}
      margin-bottom: 12px;
      color: transparent;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      -webkit-text-stroke: 2px;
      -webkit-text-stroke-color: ${color.textDarkest};

      @media (max-width: 576px) {
         letter-spacing: 0.1em;
      }
   }
`;

export const Timer = styled.div`
   .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 16px;
      border-radius: 8px;
      background-color: ${color.backgroundLigh};
      ${mixin.boxShadowMedium};

      p {
         ${font.size(30)}
         font-weight: 600;
      }
   }
`;
