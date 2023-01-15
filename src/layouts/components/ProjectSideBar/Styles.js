import styled from "styled-components";
import { color, sizes, font, mixin, zIndexValues } from "../../../utils/styles";

export const Sidebar = styled.div`
   position: relative;
   width: 16px;
   top: 0;
   height: 100vh;
   padding: 0 16px 24px;
   background: ${color.backgroundLightest};
   border-right: 1px solid ${color.borderLightest};
   z-index: ${zIndexValues.navLeft - 1};
   ${mixin.customScrollbar()}
   transition: all 0.3s ease-out;

   white-space: nowrap;

   &.expand {
      width: ${sizes.secondarySideBarWidth}px;

      @media (max-width: 1100px) {
         width: ${sizes.secondarySideBarWidth - 10}px;
      }

      .toggleBtn {
         transform: rotate(180deg);
      }
   }
`;

export const Container = styled.div`
   height: 100%;
   overflow: hidden;
   width: 100%;
`;

export const ProjectInfo = styled.div`
   display: flex;
   padding: 24px 4px;
   transition: all 0.1s ease;
`;

export const Navigate = styled.div`
   transition: all 0.1s ease;
`;

export const ProjectTexts = styled.div`
   padding: 3px 0 0 10px;
`;

export const ProjectName = styled.div`
   color: ${color.textDarkest};
   ${font.size(16)};
   font-weight: 500;
`;

export const ProjectCategory = styled.div`
   color: ${color.textMedium};
   ${font.size(13)};
   font-weight: 500;
   white-sapce: nowrap;
`;

export const Divider = styled.div`
   margin-top: 17px;
   padding-top: 18px;
   border-top: 1px solid ${color.borderLight};
`;

export const LinkItem = styled.div`
   position: relative;
   display: flex;
   padding: 8px 12px;
   border-radius: 3px;
   ${mixin.clickable}
   ${(props) =>
      !props.to
         ? `cursor: not-allowed;`
         : `&:hover { background: ${color.backgroundLight}; }`}
  i {
      margin-right: 15px;
      ${font.size(20)};
   }

   &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 0;
      width: 3px;
      border-radius: inherit;
      background: ${color.primary};
      transition: all 0.3s ease-in;
   }

   &.active {
      color: ${color.primary};
      background: ${color.backgroundLight};
      i {
         color: ${color.primary};
      }

      &::before {
         height: 100%;
         top: 0;
      }
   }
`;

export const LinkText = styled.div`
   padding-top: 2px;
   ${font.size(16)};
`;

export const NotImplemented = styled.div`
   display: inline-block;
   position: absolute;
   top: 7px;
   left: 40px;
   width: 140px;
   padding: 5px 0 5px 8px;
   border-radius: 3px;
   text-transform: uppercase;
   color: ${color.textDark};
   background: ${color.backgroundMedium};
   opacity: 0;
   ${font.size(11.5)};
   font-weight: 500;

   ${LinkItem}:hover & {
      opacity: 1;
   }
`;

export const ResizeControl = styled.div`
   position: absolute;
   z-index: 100;
   width: 24px;
   height: 100%;
   top: 0;
   left: 100%;
   bottom: 0;
   outline: none;
   background-color: transparent;
   cursor: ew-resize;

   &:hover {
      .boundaryLine {
         background-color: ${color.borderInputFocus};
         opacity: 1;
      }
   }
`;

export const StyledIcon = styled.div`
   display: flex;
   align-items: center;
   width: 24px;
   height: 24px;
   padding: 0px;
   position: absolute;
   z-index: 10;
   top: 32px;
   right: 50%;
   background-color: #fff;
   border: 0px;
   border-radius: 50%;
   box-shadow: rgb(9 30 66 / 8%) 0px 0px 0px 1px,
      rgb(9 30 66 / 8%) 0px 2px 4px 1px;
   color: #6b778c;
   cursor: pointer;
   opacity: 1;
   outline: 0;
   transition: background-color 100ms linear 0s, color 100ms linear 0s,
      opacity 350ms cubic-bezier(0.2, 0, 0, 1) 0s;
   font-size: 2rem;

   &:hover {
      background-color: ${color.borderInputFocus};
      color: #fff;
   }
`;

export const StyledLine = styled.div`
   position: absolute;
   top: 0;
   bottom: 0;
   left: -1px;
   width: 2px;
   background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.2) 0px,
      rgba(0, 0, 0, 0.2) 1px,
      rgba(0, 0, 0, 0.1) 1px,
      rgba(0, 0, 0, 0) 100%
   );
   opacity: 0.5;
   pointer-events: none;
   transition: background-color 200ms ease 0s;
`;
