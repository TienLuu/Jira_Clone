import styled, { css } from "styled-components";
import { color, font, mixin } from "../../utils/styles";

export const StyledButton = styled.button`
   display: inline-flex;
   align-items: center;
   justify-content: ${(props) => (props.textCenter ? "center" : "flex-start")};
   height: 32px;
   vertical-align: middle;
   line-height: 1;
   padding: 0 ${(props) => (props.iconOnly ? 9 : 12)}px;
   white-space: nowrap;
   border-radius: 3px;
   width: ${(props) => (props.fullWidth ? "100%" : "unset")};
   transition: all 0.1s;
   appearance: none;
   ${mixin.clickable};
   ${font.size(14.5)};
   ${(props) => buttonVariants[props.variant]};

   &.hightlight {
      ${mixin.boxShadowButton};
   }

   &.loginBtn {
      padding: 18px ${(props) => (props.iconOnly ? 9 : 12)}px;
      margin-top: 16px;
      font-weight: 600;
      outline: ${color.primary};
      box-shadow: 0 0 0 1px rgba(43, 45, 80, 0.1),
         0 2px 5px 0 rgba(43, 45, 80, 0.08), 0 1px 1.5px 0 rgba(0, 0, 0, 0.07),
         0 1px 2px 0 rgba(0, 0, 0, 0.08);
   }

   &:disabled {
      opacity: 0.6;
      cursor: default;
   }
`;

const secondaryAndEmptyShared = css`
   color: ${color.textDark};
   &:not(:disabled) {
      &:hover {
         background: ${color.backgroundLight};
      }
      &:active {
         color: ${color.primary};
         background: ${color.backgroundLightPrimary};
      }
      ${(props) =>
         props.isActive &&
         css`
            color: ${color.primary};
            background: ${color.backgroundLightPrimary} !important;
         `}

      ${(props) =>
         props.moreInfo &&
         css`
            color: ${color.textDarkest};
            &:hover {
               background: ${color.backgroundLightPrimary} !important;
            }
         `}
   }
`;

const colored = css`
   color: #fff;
   background: ${(props) => color[props.variant]};

   &:not(:disabled) {
      &:hover,
      &:focus {
         background: ${(props) => mixin.lighten(color[props.variant], 0.15)};
      }
   }
`;

export const StyledSpinner = styled.div``;

const buttonVariants = {
   primary: colored,
   success: colored,
   danger: colored,
   secondary: css`
      background: ${color.secondary};
      ${secondaryAndEmptyShared};
   `,
   empty: css`
      background: #fff;
      ${secondaryAndEmptyShared};
   `,
};
export const Text = styled.div`
   padding-left: ${(props) => (props.withPadding ? 7 : 0)}px;
`;
