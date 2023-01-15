import styled from "styled-components";
import { color, mixin } from "../../../../utils/styles";

export const StyledTaskItem = styled.li`
   background-color: #fff;
   padding: 10px;
   border-radius: 2px;
   ${mixin.boxShadowDropdown};
   margin-bottom: 8px;
   cursor: grab;
   user-select: none;

   &:hover {
      background-color: ${color.backgroundLight};

      .taskActionBtn {
         opacity: 1;
         visibility: visible;
      }
   }

   .taskMenuActive {
      .taskActionBtn {
         opacity: 1;
         visibility: visible;
         background-color: ${color.secondary};
         ${mixin.boxShadowButton}
         color: ${color.textDark};
      }
   }
`;

export const Title = styled.h4`
   padding-bottom: 12px;
`;

export const StyledTitle = styled.div`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;
   margin-bottom: 20px;
`;

export const StyledButton = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   visibility: hidden;
   cursor: pointer;
   border-radius: 3px;
   opacity: 0;
   transition: all 0.1s ease;

   &:hover {
      background-color: ${color.secondary};
      ${mixin.boxShadowButton}
   }
`;

export const TaskInfo = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

export const MemberAvatar = styled.div`
   display: flex;
   align-items: center;

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
         margin-left: -8px;
      }
   }
`;

export const TaskProperty = styled.div`
   display: flex;
   align-items: center;
   gap: 3px;
`;
