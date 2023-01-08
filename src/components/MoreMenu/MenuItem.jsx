import PropTypes from "prop-types";
import Button from "../Button/Button";
import classnames from "classnames/bind";

import styles from "./Menu.module.scss";
const cx = classnames.bind(styles);

const MenuItem = ({ item = {}, onClick }) => {
   const customClass = cx("item");

   return (
      <>
         <Button
            fullWidth
            className={customClass}
            leftIcon={item.icon}
            to={item.to}
            onClick={onClick}
         >
            {item.title}
         </Button>
      </>
   );
};
MenuItem.propTypes = {
   item: PropTypes.object.isRequired,
   onClick: PropTypes.func,
};

export default MenuItem;
