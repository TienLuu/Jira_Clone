import PropTypes from "prop-types";
import { useState } from "react";

const propTypes = {
   value: PropTypes.any.isRequired,
};

const useToggle = (value) => {
   const [isActive, setIsActive] = useState(value);

   const setValue = (value) => {
      setIsActive((currentValue) =>
         typeof value === "boolean" ? value : !currentValue
      );
   };

   return [isActive, setValue];
};

useToggle.propTypes = propTypes;

export default useToggle;
