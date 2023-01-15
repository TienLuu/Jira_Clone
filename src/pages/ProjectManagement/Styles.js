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

   .memberWrapper {
      padding: 0;
      border: none;
      background-color: transparent;
      margin-bottom: 0;

      &:hover {
         background-color: transparent;
      }
   }

   .memberAvatar {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
         z-index: 2;
         transform: translateY(-5px);
      }
   }

   .styledGroup {
      margin-left: 8px;

      & > * {
         border: 2px solid #fff;
         margin-left: -8px !important;
      }
   }
`;

export const StyledAvatar = styled.div`
   cursor: pointer;
   transition: all 0.3s ease;
   display: flex;
   align-items: center;

   &:hover {
      z-index: 2;
      transform: translateY(-3px);
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

export const StyledMenuItem = styled.div`
   white-space: nowrap;
   max-width: 300px;
   overflow-x: hidden;
   position: relative;
   display: flex;
   padding: 4px 8px;
   gap: 6px;
   align-items: center;

   span {
      flex: 1;
      overflow-x: hidden;
      text-overflow: ellipsis;
   }
`;
