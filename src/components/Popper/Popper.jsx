import PropTypes from "prop-types";
import { StyledPopper } from "./Styles";

const propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
};

const Popper = ({ children, className }) => {
   return <StyledPopper className={className}>{children}</StyledPopper>;
};

Popper.propTypes = propTypes;

export default Popper;
