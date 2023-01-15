import styled from "styled-components";
import { font, color } from "../../../utils/styles";

export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media (max-width: 576px) {
      & {
         flex-wrap: wrap;
         gap: 12px;
      }
   }
`;

export const StyledTaskType = styled.div`
   max-width: 200px;

   @media (max-width: 576px) {
      & {
         order: 1;
      }
   }

   .styledMenuSelect {
      & > div {
         margin-bottom: 0;
      }
   }
`;

export const TaskType = styled.div`
   display: flex;
   align-items: center;
   ${font.size(13)}
   color: ${color.textMedium};
   gap: 8px;
   padding: 4px 8px;

   span {
      ${font.size(13)}
      line-height: 1;
      text-transform: uppercase;
   }
`;

export const TypeName = styled.div`
   ${font.size(13)}
   line-height: 1;
   text-transform: uppercase;
   font-weight: 600;
`;

export const ControlGroup = styled.div`
   display: flex;
   gap: 8px;

   @media (max-width: 576px) {
      & {
         width: 100%;
      }
   }

   .controlBtn {
      ${font.size(14.5)}
      color: ${color.textDark};
      background-color: transparent;

      & > div {
         display: flex;
         gap: 5px;
      }
   }
`;

export const Body = styled.section`
   display: flex;
   gap: 50px;

   @media (max-width: 768px) {
      & {
         flex-wrap: wrap;
         gap: 20px;
      }
   }
`;

export const BodyLeft = styled.div`
   width: 64%;

   @media (max-width: 768px) {
      & {
         width: 100%;
      }
   }
`;

export const BodyRight = styled.div`
   flex: 1;

   @media (max-width: 768px) {
      & {
         width: 100%;
      }
   }
`;

export const StyledTitle = styled.div`
   margin-top: 18px;

   .taskName {
      ${font.size(24)}
      color: ${color.textDarkest};
      font-weight: 400;
      height: auto;
      resize: none;
      overflow-y: hidden;
      border-color: transparent;
      background-color: transparent;

      &:hover {
         background-color: ${color.backgroundLight};
      }

      ::placeholder {
         color: ${color.textLight};
      }
   }
`;

export const FormGroup = styled.div`
   &.comment {
      margin-top: 40px;
   }
`;

export const Title = styled.h4`
   ${(props) => (props.size ? font.size(props.size) : font.size(13))}
   font-weight: 700;
   color: ${color.textDark};
   padding: 24px 0 4px;
`;

export const StyledEditor = styled.div`
   & .ck {
      &.ck-sticky-panel__content {
         display: none;
      }

      &.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
         border: none;
      }

      &.ck-editor__main > .ck-editor__editable:not(.ck-focused):hover {
         background-color: ${color.backgroundLight};
      }

      &.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected {
         outline: none;
      }

      &.ck-widget.ck-widget_selected
         > .ck-widget__type-around
         > .ck-widget__type-around__button {
         display: none;
      }
   }

   &.visible {
      cursor: text;

      & .ck {
         &.ck-sticky-panel__content {
            display: block;
         }

         &.ck-editor__main > .ck-editor__editable:not(.ck-focused) {
            box-shadow: none;
            border: 1px solid ${color.borderInputFocus};
         }

         &.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable) {
            box-shadow: none;
            border: 1px solid ${color.borderInputFocus};
         }
      }
   }

   &:hover {
      background-color: ${color.backgroundLight};
   }
`;

export const StyledEditorControl = styled.div`
   display: none;
   align-items: center;
   gap: 12px;
   margin-top: 12px;

   &.visible {
      display: flex;
   }
`;

export const Status = styled.div`
   ${font.size(15)}
   padding: 4px 8px;
   text-transform: uppercase;
`;

export const MemberWrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 8px;
   align-items: center;

   .assignmentBtnWrapper {
      background-color: transparent;
      width: fit-content;
      border: none;
      padding: 0;
      height: auto;
      margin-bottom: 0;

      &:hover {
         background-color: transparent;
      }
   }
`;

export const Member = styled.div`
   display: flex;
   align-items: center;
   background-color: ${color.backgroundMedium};
   border-radius: 4px;
   padding: 4px 8px;
   user-select: none;

   &:hover {
      background-color: ${color.borderLight};
   }
`;

export const MemberName = styled.div`
   ${font.size(14)}
   padding: 0 4px 0 8px;
`;

export const Assignment = styled.div`
   display: flex;
   align-items: center;
   gap: 4px;
   padding: 4px 8px;
   white-space: nowrap;

   &.alreadyExist {
      display: none;
   }
`;

export const AssignmentBtn = styled.div`
   display: flex;
   align-items: center;
   gap: 3px;
   color: ${color.primary};

   span {
      ${font.size(13)}
   }

   &:hover {
      span {
         text-decoration: underline;
      }
   }
`;

export const Priority = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 4px 8px;
`;

export const PriorityName = styled.div`
   ${font.size(15)}
   line-height: 1;
   text-transform: uppercase;
`;

export const ButtonRemove = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: transparent;
   cursor: pointer;
   transition: all 0.1s ease;

   &:hover {
      background-color: ${color.backgroundMedium};
   }
`;
