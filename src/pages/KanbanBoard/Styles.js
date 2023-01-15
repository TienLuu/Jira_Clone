import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const GroupControl = styled.div`
   display: flex;
   align-items: center;
   gap: 20px;
   margin-top: 24px;

   & > * {
      flex-shrink: 0;
   }

   .memberAvatar {
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
         z-index: 2;
         transform: translateY(-3px);
      }
   }

   .manageUserBtn {
      padding: 0;
      border: none;
      background-color: transparent;
      margin-bottom: 0;

      &:hover {
         background-color: transparent;
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

export const StyledSearchBar = styled.div``;

export const StyledTitle = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 40px;
`;

export const CreatorAvatar = styled.div`
   margin-right: 12px;
`;

export const GroupAvatar = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
`;

export const MemberItem = styled.div`
   position: relative;
   white-space: nowrap;
   display: flex;
   padding: 4px 8px;
   gap: 6px;
   align-items: center;
   max-width: 300px;
   overflow: hidden;

   span {
      flex: 1;
      text-overflow: ellipsis;
   }
`;

export const ButtonControl = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;
`;

export const StyledButtonUser = styled.div`
   width: 36px;
   height: 36px;
   border: 1px solid #ccc;
   color: ${color.textDark};
   background-color: ${color.secondary};
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   ${font.size(16)}
   cursor: pointer;

   svg {
      ${font.size(20)}
   }

   &:hover {
      background-color: #e7e5e5;
   }
`;

export const StyledButtonRemove = styled.div`
   margin-left: auto;
`;

export const StyledContent = styled.div`
   display: flex;
   gap: 8px;
   margin-top: 28px;
`;

export const StatusColumn = styled.div`
   flex: 1;
   flex-shrink: 0;
   min-width: 240px;
   background-color: ${color.backgroundLightest};
   padding: 0 8px;

   h3 {
      padding: 12px 4px 16px;
      text-transform: uppercase;
      ${font.size(12.5)}
      font-weight: 500;
      letter-spacing: 0.02rem;
      color: ${color.textMedium};
   }
`;
