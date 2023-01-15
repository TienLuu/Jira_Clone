import styled from "styled-components";
import { color, font, mixin } from "../../utils/styles";

export const Wrapper = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   gap: 4px;
   margin-bottom: ${(props) => (props.mb ? "1rem" : "0")};

   & > * {
      flex: 1;
   }

   & > [data-tippy-root] {
      min-width: 100% !important;
   }

   label {
      ${font.size(16)}
      color: ${color.textLight};
      margin-bottom: 4px;
   }
`;

export const WrapperPopper = styled.div`
   max-height: 20vh;
   min-width: 200px;
`;

export const Search = styled.div`
   input {
      width: 100%;
      padding: 4px 12px;
      border: none;

      &:focus {
         outline: none;
      }
   }
`;

export const WrapperList = styled.div`
   max-height: 50vh;
   overflow-y: auto;
`;

export const Item = styled.div`
   position: relative;
   cursor: pointer;
   // padding: 4px 12px;

   &:hover {
      background-color: ${color.backgroundLight};
      box-shadow: ${mixin.boxShadowDropdown};
   }
`;

export const Empty = styled.div`
   padding: 4px 12px;
   color: ${color.textLight};
   ${font.size(18)}
`;

export const Loadmore = styled.div`
   padding: 4px 16px;
   text-align: center;
   color: ${color.textDarkest};
   ${font.size(16)}
   text-decoration: underline;
   cursor: pointer;
   transition: all 0.3s ease;

   &:hover {
      color: ${color.primary};
   }
`;

export const StyledTitle = styled.div`
   width: 100%;
   min-height: 32px;
   padding: 0 12px;
   flex: 1;
   display: flex;
   align-items: center;
   background-color: rgb(244, 245, 247);
   color: #091e42;
   border-radius: 3px;
   border: 1px solid rgb(223, 225, 230);
   margin-bottom: 1rem;
   cursor: pointer;

   &:hover {
      background-color: ${color.backgroundMedium};
   }
`;

export const Title = styled.div`
   flex: 1;
   color: ${color.textDarkest};
`;

export const IconTitle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   ${font.size(29)};
   color: ${color.textDarkest};
`;
