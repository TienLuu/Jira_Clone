import PropTypes from "prop-types";
import { Tooltip } from "@mui/material";

const propTypes = {
   children: PropTypes.node,
   size: PropTypes.string,
};

const defaultProps = {
   size: "14px",
};

const PathToolTip = ({ children, size, ...props }) => {
   return (
      <Tooltip
         PopperProps={{
            sx: {
               "& .MuiTooltip-tooltip": {
                  fontSize: { size },
               },
            },
         }}
         disableInteractive
         {...props}
      >
         <span>{children}</span>
      </Tooltip>
   );
};

PathToolTip.propTypes = propTypes;
PathToolTip.defaultProps = defaultProps;

export default PathToolTip;
