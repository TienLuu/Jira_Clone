import PropTypes from "prop-types";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Icon from "../Icon";
import { Header, ButtonClose, Body, Footer } from "./Styles";

const propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
   title: PropTypes.string,
   custom: PropTypes.bool,
   footer: PropTypes.node,
   children: PropTypes.node,
};

const Modal = ({ open, onClose, title, footer, children }) => {
   return (
      <Dialog open={open} onClose={onClose} scroll="body">
         <DialogTitle>
            <Header>
               <h3>{title}</h3>
               <ButtonClose onClick={onClose}>
                  <Icon type="close" size={35} />
               </ButtonClose>
            </Header>
         </DialogTitle>
         <DialogContent>
            <Body>{children}</Body>
         </DialogContent>
         <DialogActions>
            <Footer>{footer}</Footer>
         </DialogActions>
      </Dialog>
   );
};

Modal.propTypes = propTypes;

export default Modal;
