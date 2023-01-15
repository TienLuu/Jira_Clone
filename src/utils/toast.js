import { toast } from "react-toastify";

const showSuccess = (message, callBack = () => {}) => {
   toast.success(message, {
      autoClose: 1000,
      onClose: callBack,
   });
};

const showError = (message, callBack = () => {}) => {
   toast.error(message, {
      autoClose: 1000,
      onClose: callBack,
   });
};

export { showSuccess, showError };
