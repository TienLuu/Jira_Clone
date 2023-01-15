import PropTypes from "prop-types";
import {
   forwardRef,
   useId,
   useEffect,
   useRef,
   useImperativeHandle,
} from "react";

import useUpdateValue from "../../hooks/useUpdateValue";
import { Message, StyledTextField } from "./Styles";

const propTypes = {
   type: PropTypes.string,
   variant: PropTypes.oneOf(["mui", "jira"]),
   label: PropTypes.string,
   onChange: PropTypes.func,
   disabled: PropTypes.bool,
   readOnly: PropTypes.bool,
   autoHeight: PropTypes.bool,
   className: PropTypes.string,
   inputClass: PropTypes.string,
   error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   placeholder: PropTypes.string,
};

const defaultProps = {
   type: "text",
   variant: "mui",
   readOnly: false,
   onChange: () => {},
   onBlur: () => {},
};

const TextField = forwardRef(
   (
      {
         type,
         variant,
         label,
         className,
         inputClass,
         autoHeight,
         value,
         error,
         readOnly,
         disabled,
         onChange,
         onBlur,
         placeholder,
         ...passProp
      },
      ref
   ) => {
      const [inputValue, setInputValue] = useUpdateValue(value);

      const id = useId();
      const myRef = useRef();
      let Component = "input";
      if (type === "textarea") {
         Component = "textarea";
         type = null;
      }

      useEffect(() => {
         if (!autoHeight) return;

         const localRef = myRef.current;
         localRef.addEventListener("input", autoResize);

         function autoResize() {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
         }

         return () => {
            localRef.removeEventListener("input", autoResize);
         };
      }, [autoHeight]);

      const inputMethod = {
         setValue: (value) => {
            setInputValue(value);
         },
         getValue: () => {
            return inputValue;
         },
         getInputNode: () => {
            return myRef.current;
         },
      };
      useImperativeHandle(ref, () => inputMethod);

      const handleOnBlur = () => {
         onBlur(inputValue, inputMethod);
      };

      const handleOnChange = (evt) => {
         setInputValue(evt.target.value);

         setTimeout(() => {
            onChange(evt.target.value, inputMethod);
         }, 0);
      };

      return (
         <StyledTextField
            readOnly={readOnly}
            className={`${className ? [className] : ""} ${
               variant ? [variant] : ""
            }`}
         >
            {label && <label htmlFor={id}>{label}</label>}
            <Component
               className={`${inputClass ? [inputClass] : ""}`}
               type={type}
               placeholder={variant === "mui" ? "" : placeholder}
               onChange={handleOnChange}
               onBlur={handleOnBlur}
               readOnly={readOnly}
               disabled={disabled}
               value={inputValue || ""}
               ref={myRef}
               id={id}
               {...passProp}
            />
            {error && <Message>{error}</Message>}
         </StyledTextField>
      );
   }
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
