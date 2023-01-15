import styled from "styled-components";

export const Wrapper = styled.div`
   padding: 0 40px;
`;

export const Heading = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   align-items: center;
   padding: 16px 0;
`;

export const Control = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 20px;
   grid-column: 3 / span 2;
`;

export const UserInfo = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;

   & > div {
      display: flex;
      word-break: break-all;

      p {
         width: 90px;
         flex-shrink: 0;
         font-weight: 600;
      }
   }
`;
