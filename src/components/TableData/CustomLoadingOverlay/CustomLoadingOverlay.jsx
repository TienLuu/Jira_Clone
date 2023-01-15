import PropTypes from "prop-types";
import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { Wrapper, LoaderWrapper, Overlay, Loader, LoaderInner } from "./Styles";

const propTypes = {
   message: PropTypes.string,
   overlay: PropTypes.bool,
};

const defaultProps = {
   message: "Data is loading ...",
   overlay: false,
};

const CustomLoadingOverlay = ({ message, overlay }) => {
   return (
      <Wrapper>
         <LoaderWrapper>
            <CloudQueueOutlinedIcon fontSize="inherit" color="inherit" />
            <Loader>
               <LoaderInner className="inner"></LoaderInner>
               <LoaderInner className="inner"></LoaderInner>
               <LoaderInner className="inner"></LoaderInner>
            </Loader>
            <p>{message}</p>
         </LoaderWrapper>
         {overlay && <Overlay></Overlay>}
      </Wrapper>
   );
};

CustomLoadingOverlay.propTypes = propTypes;
CustomLoadingOverlay.defaultProps = defaultProps;

export default CustomLoadingOverlay;
