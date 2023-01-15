import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const propTypes = {
   children: PropTypes.element.isRequired,
};

const UserProtected = ({ children }) => {
   const { user } = useSelector((state) => state.auth);
   const location = useLocation();

   if (!user) {
      const url = `/signin?redirectUrl=${location.pathname}`;
      return <Navigate to={url} replace />;
   }
   return children;
};

UserProtected.propTypes = propTypes;

export default UserProtected;
