import { forwardRef } from "react";
import PropTypes from "prop-types";

import { Message, StyledTextField } from "./Styles";

const propTypes = {
   type: PropTypes.string,
   label: PropTypes.string,
   onChange: PropTypes.func,
   placeholder: PropTypes.string,
   readOnly: PropTypes.bool,
};

const defaultProps = {
   type: "text",
   readOnly: false,
};

const TextField = forwardRef(
   (
      {
         type,
         label,
         onChange,
         className,
         error,
         placeholder,
         readOnly,
         ...passProp
      },
      ref
   ) => {
      let Component = "input";

      if (type === "textarea") {
         Component = "textarea";
         type = null;
      }
      return (
         <StyledTextField readOnly={readOnly}>
            {label && <label>{label}</label>}
            <Component
               type={type}
               placeholder={placeholder}
               onChange={onChange}
               {...passProp}
               ref={ref}
            />
            {error && <Message>{error}</Message>}
         </StyledTextField>
      );
   }
);

TextField.propTypes = propTypes;
TextField.defaultProps = defaultProps;

export default TextField;
