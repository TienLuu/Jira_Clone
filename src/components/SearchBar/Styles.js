import styled from "styled-components";
import { color, font, mixin } from "../../utils/styles";

export const StyledSearchBar = styled.div`
   --divider-width: 1px;
   --divider-spacer: 8px;
   --submit-button-width: 52px;

   display: flex;
   position: relative;
   align-items: center;
   height: 40px;
   width: min(336px, 100%);
   border-radius: 4px;
   background-color: #fff;
   border: ${(props) =>
      props.outline ? `2px solid ${color.borderLightest}` : "none"};
   font-size: 1.6rem;
   overflow: hidden;

   &.outline {
      border-color: ${color.borderInputFocus};
   }

   &:focus-within {
      border-color: ${color.borderInputFocus};
   }

   .icon {
      position: absolute;
      right: calc(var(--submit-button-width) + 12px);
      color: var(--text-color);
      user-select: none;

      &:hover {
         color: ${color.primary};
         ${mixin.clickable};
      }
   }
`;

export const SearchInput = styled.input`
   flex: 1;
   height: 100%;
   width: 100%;
   ${font.size(16)}
   background-color: transparent;
   border: none;
   outline: none;
   padding: 14px 12px;
   padding-right: 40px;
`;

export const BtnSubmit = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 2.4rem;
   height: 100%;
   line-height: 1;
   padding: 4px 8px;
   width: var(--submit-button-width);
   border: none;
   background-color: transparent;
   cursor: pointer;

   &:hover {
      background-color: ${color.backgroundLightest};
   }

   &:active {
      background-color: ${color.backgroundLightSuccess};
   }

   &::before {
      content: "";
      display: block;
      position: absolute;
      top: var(--divider-spacer);
      bottom: var(--divider-spacer);
      background-color: rgba(22, 24, 35, 0.12);
      left: calc(var(--divider-width) * -1);
      width: var(--divider-width);
   }
`;
