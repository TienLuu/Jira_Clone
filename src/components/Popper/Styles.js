import styled from "styled-components";
import { mixin, color } from "../../utils/styles";

export const StyledPopper = styled.div`
   width: 100%;
   border-radius: 8px;
   border: 1px solid ${color.backgroundMedium};
   background-color: #fff;
   box-shadow: ${mixin.boxShadowDropdown};
   padding: 8px 0;
   max-height: min(80vh, 734px);
   overflow: hidden auto;
`;
