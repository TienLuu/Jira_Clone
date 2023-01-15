import styled from "styled-components";
import { color, font } from "../../../../utils/styles";

export const Header = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const StyledTitle = styled.div`
   h3 {
      ${font.size(20)}
      color: ${color.textDarkest};
      font-weight: 400;
   }
`;

export const StyledButtonClose = styled.div`
   display: flex;
   gap: 8px;
`;

export const Body = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8px;
`;

export const TaskType = styled.div`
   display: flex;
   align-items: center;
   padding: 4px 8px;
   gap: 8px;
   ${font.size(18)}
`;

export const TypeName = styled.div`
   ${font.size(15)}
   line-height: 1;
   text-transform: uppercase;
`;

export const Priority = styled.div`
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 4px 8px;
`;

export const Status = styled.div`
   padding: 4px 8px;
   text-transform: uppercase;
`;

export const FormGroup = styled.div`
   display: flex;
   align-items: center;
   gap: 12px;

   > * {
      flex: 1;
   }

   h4 {
      ${font.size(18)}
      color: ${color.primary};
   }
`;

export const Footer = styled.div`
   padding-top: 30px;
   display: flex;
`;

export const ButtonConfirm = styled.div`
   display: flex;
   gap: 12px;
   align-items: center;
   margin-left: auto;
`;
