import styled from "styled-components";

export const Wrapper = styled.div`
   padding-bottom: 50px;

   form {
      width: min(600px, 100%);
      margin: 0 auto;
   }
`;

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 40px;
`;

export const StyledForm = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
`;

export const OnlyReadField = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;

   & > * {
      flex: 1;
   }
`;

export const CategoryItem = styled.div`
   padding: 8px 12px;
`;
