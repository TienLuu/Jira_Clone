import styled, { css } from "styled-components";
import { mixin } from "../../utils/styles";

const animation = css`
   @keyframes popperAnimate {
      0% {
         transform: translateY(10px);
         opacity: 0.6;
      }

      100% {
         transform: translateY(0);
         opacity: 1;
      }
   }
`;

export const Container = styled.div`
   position: relative;

   & > [data-tippy-root] {
      min-width: 100% !important;
   }
`;

export const Wrapper = styled.div`
   min-width: 160px;
   color: red;
   ${animation}
   animation: popperAnimate 0.3s ease;
`;

export const Menu = styled.div`
   ${mixin.clickable}
`;
