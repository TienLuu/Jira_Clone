import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const Container = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 10px;
   align-items: center;
   ${font.size(15)};
`;

export const StyledNavLink = styled.div`
   a {
      text-transform: capitalize;
      white-space: nowrap;

      &:hover {
         text-decoration: underline;
      }

      &.rightHere {
         color: ${color.primary};
      }
   }
`;

export const Divider = styled.span`
   ${font.size(18)}
`;
