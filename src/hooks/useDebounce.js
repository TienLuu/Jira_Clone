import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const propTypes = {
   value: PropTypes.any.isRequired,
   delay: PropTypes.number.isRequired,
};

const useDebounce = (value, delay) => {
   const [debounceValue, setDebounceValue] = useState(value);
   useEffect(() => {
      const timeout = setTimeout(() => {
         setDebounceValue(value);
      }, delay);

      return () => clearTimeout(timeout);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [value]);
   return debounceValue;
};

useDebounce.propTypes = propTypes;

export default useDebounce;
