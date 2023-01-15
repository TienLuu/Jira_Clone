import PropTypes from "prop-types";
import {
   useRef,
   useState,
   forwardRef,
   useImperativeHandle,
   useEffect,
} from "react";

import Icon from "../Icon";
import { SearchInput, StyledSearchBar, BtnSubmit } from "./Styles";

const propTypes = {
   outline: PropTypes.bool,
   loading: PropTypes.any,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   placeholder: PropTypes.string,
   onClearSearchValue: PropTypes.func,
   onSubmit: PropTypes.func,
   options: PropTypes.shape({
      debounce: PropTypes.bool,
      onDebounce: PropTypes.func,
      time: PropTypes.number,
   }),
};

const defaultProps = {
   outline: true,
   onChange: () => {},
   onClearSearchValue: () => {},
   onSubmit: () => {},
   options: {
      debounce: false,
      onDebounce: () => {},
      time: 200,
   },
   value: "",
   placeholder: "Search here",
};

const SearchBar = forwardRef(
   (
      {
         loading,
         onChange,
         onClearSearchValue,
         onSubmit,
         options,
         value,
         placeholder,
         outline,
      },
      ref
   ) => {
      const [inputValue, setInputValue] = useState(value);
      const isFirstRender = useRef(true);
      const searchMethod = {
         getValue: () => inputValue,
         setValue: (value) => {
            setInputValue(value);
         },
      };

      useImperativeHandle(ref, () => searchMethod);

      const handleChange = (evt) => {
         setInputValue(evt.target.value);
         onChange(inputValue, searchMethod);
      };
      const handleResetInput = () => {
         setInputValue("");
         onClearSearchValue(inputValue, searchMethod);
      };

      useEffect(() => {
         if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
         }
         if (!options.debounce) return;
         const timeouId = setTimeout(() => {
            options.onDebounce?.(inputValue, searchMethod);
         }, options.time);

         return () => {
            clearTimeout(timeouId);
         };
      }, [inputValue]);

      return (
         <StyledSearchBar outline={outline}>
            <SearchInput
               type="text"
               value={inputValue}
               placeholder={placeholder}
               onChange={handleChange}
            />
            {loading ? (
               <Icon type="more" className="icon" />
            ) : inputValue ? (
               <Icon type="close" className="icon" onClick={handleResetInput} />
            ) : (
               ""
            )}
            <BtnSubmit onClick={() => onSubmit(inputValue)}>
               <Icon type="search" />
            </BtnSubmit>
         </StyledSearchBar>
      );
   }
);

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;
