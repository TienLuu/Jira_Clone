import styled from "styled-components";
import { color, font } from "../../utils/styles";

export const StyledTextField = styled.div`
   --input-height: 40px;

   input:not([type="checkbox"]) {
      width: 100%;
      padding: 0.5rem;
      background: ${color.backgroundLightest};
      outline: none;
      border-radius: 4px;
      border: 1px solid ${color.borderLight};
      color: ${color.textDarkest};
      margin-bottom: 1rem;
      ${font.size(15)};
      font-weight: 400;
      transition: all 0.3s ease;
      cursor: ${(props) => (props.readOnly ? "no-drop" : "auto")};

      &::placeholder {
         font-size: inherit;
         color: ${color.textLight};
      }

      &:hover {
         background: ${color.backgroundLight};
      }

      &:focus {
         background: transparent;
      }
   }

   textarea {
      height: auto;
   }

   label {
      display: inline-block;
      ${font.size(16)}
      color: ${color.textLight};
      margin-bottom: 4px;
   }

   &.mui {
      position: relative;
      display: flex;
      flex-direction: column;

      .input {
         width: 100%;
         max-width: 100%;
         height: var(--input-height);
         background-color: transparent;
         color: var(--heading-color);
         font-size: 1.6rem;
         border: none;
         border-radius: 6px;
         border: 1px solid var(--border-color);
         padding: 12px 16px;

         &:focus {
            outline: 2px solid var(--border-color);
            outline-offset: -3px;
         }

         &::placeholder {
            visibility: hidden;
         }
      }

      label {
         position: absolute;
         left: 20px;
         top: 0;
         transform: translateY(calc(-50% + var(--input-height) / 2));
         padding: 0 8px;
         background-color: transparent;
         color: var(--text-light-color);
         font-size: 1.6rem;
         font-weight: 400;
         line-height: 1;
         pointer-events: none;
         transition: 0.2s;
         transition-property: transform, color;
      }

      .input:focus ~ label {
         color: var(--primary-color);
         background-color: var(--bg-light-color);
      }

      .input:focus ~ label,
      .input:not(:placeholder-shown) ~ label {
         font-size: 1.4rem;
         transform: translateY(-50%);
         background-color: var(--bg-light-color);
      }

      .errorMess {
         color: var(--error-color);
         font-size: 1.2rem;
         margin: 4px 0 0 16px;
      }
   }

   &.jira {
      display: flex;
      flex-direction: column;

      .input {
         order: 1;
         width: 100%;
         padding: 12px 16px;
         background-color: #fff;
         border-color: #dfe1e6;
         color: #091e42;
         border-radius: 3px;
         border-width: 1px;
         border-style: solid;
         box-sizing: border-box;
         ${font.size(14)}
         overflow-wrap: break-word;
         outline: none;

         &:hover {
            background-color: ${color.backgroundLightest};
         }

         &:focus {
            background-color: transparent;
            border-color: #4c9aff;
            outline: 1px solid #4c9aff;
         }
      }

      label {
         ${font.size(16)}
         color: ${color.textLight};
         margin-bottom: 4px;
         width: fit-content;
      }

      .errorMess {
         display: flex;
         align-items: center;
         color: #ae2a19;
         order: 2;
         font-size: 0.857143em;
         font-style: inherit;
         line-height: 1.33333;
         display: flex;
         margin-top: 4px;
      }
   }
`;

export const Message = styled.span`
   display: block;
   width: 100%;
   ${font.size(12)}
   color: red;
   text-align: left;
   position: relative;
   top: -10px;
`;

export const Wrapper = styled.div`
   textarea.input {
      height: auto;
      max-width: 100%;
   }
`;
