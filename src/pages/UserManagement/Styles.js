import styled from "styled-components";

export const Wrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   flex: 1 1;
   margin: 0 40px;

   @media (max-width: 576px) {
      & {
         margin: 0 16px;
      }
   }
`;

export const Title = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 16px 0;
`;

export const StyledSearch = styled.div`
   margin: 8px 0 16px;
`;

export const Container = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
`;
