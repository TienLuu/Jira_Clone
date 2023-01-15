import PropTypes from "prop-types";
import { StyledLogo } from "./Styles";

const propTypes = {
   classname: PropTypes.string,
   id: PropTypes.string.isRequired,
};

const Logo = ({ classname, id, ...props }) => {
   const colorSVG = { color1: "#42526E", color2: "#5E6C84" };
   const { light } = props;

   if (light) {
      colorSVG.color1 = "#0052CC";
      colorSVG.color2 = "#2684FF";
   }
   return (
      <StyledLogo className={classname} {...props}>
         <svg
            viewBox="0 0 32 35"
            height="32"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
            aria-hidden="true"
         >
            <defs>
               <linearGradient
                  x1="99.684716%"
                  y1="15.8138128%"
                  x2="39.8444399%"
                  y2="97.4388388%"
                  id={id}
               >
                  <stop stopColor={colorSVG.color1} offset="0%"></stop>
                  <stop stopColor={colorSVG.color2} offset="100%"></stop>
               </linearGradient>
            </defs>
            <g stroke="none" strokeWidth="1" fill={colorSVG.color1}>
               <path
                  fill={id}
                  d="M6.90502605,15.6123193 C6.76436383,15.4302139 6.53773035,15.3340846 6.30742588,15.35884 C6.0771214,15.3835955 5.876643,15.525635 5.7787929,15.7333781 L0.0719979599,27.0218487 C-0.0337056449,27.2310259 -0.0224063827,27.4794358 0.101860917,27.6783741 C0.226128216,27.8773125 0.445645594,27.9984148 0.68202605,27.9984369 L8.62844459,27.9984369 C8.88847261,28.0044096 9.12761649,27.8581627 9.23847268,27.6253781 C10.9526159,24.1210252 9.91378448,18.7926722 6.90502605,15.6123193 Z"
               ></path>
               <path
                  fill={colorSVG.color2}
                  d="M11.0859556,5.33713587 C8.19309829,9.74089822 7.85921851,15.3267488 10.2073011,20.0371359 L14.0383488,27.6176065 C14.1538739,27.8462194 14.3900332,27.9906411 14.6483769,27.9906653 L22.5933685,27.9906653 C22.829749,27.9906431 23.0492663,27.8695408 23.1735336,27.6706025 C23.2978009,27.4716641 23.3091002,27.2232543 23.2033966,27.014077 C23.2033966,27.014077 12.5147056,5.8619594 12.2460792,5.33290058 C12.1377032,5.11315026 11.9118188,4.97410225 11.6646746,4.97500451 C11.4175304,4.97590676 11.1926893,5.11660025 11.0859556,5.33713587 L11.0859556,5.33713587 Z"
               ></path>
            </g>
         </svg>
         Jira Clone
      </StyledLogo>
   );
};

Logo.propTypes = propTypes;

export default Logo;
