import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const NotFound = styled.section`
   min-height: 100vh;
`;

export const Wrapper = styled.div`
   max-width: 50rem;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   text-align: center;
   padding: 0;

   @media (min-width: 500px) {
      padding: 2rem 2rem;
   }
`;

export const StyledImg = styled.div`
   width: 100%;
   height: 100%;
`;

export const Main = styled.div`
   position: relative;
   top: -2.5rem;

   @media (min-width: 768px) {
      top: -5rem;
   }
`;

export const Title = styled.h2`
   ${font.size(24)}
   color: ${color.warning};
   margin-top: 1rem;
   text-transform: capitalize;
`;

export const Subtitle = styled.p`
   ${font.size(14)}
   color: ${color.textLight};
   max-width: 600px;
   margin: 10px 0;
`;
