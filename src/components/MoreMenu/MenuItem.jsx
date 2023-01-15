import PropTypes from "prop-types";
import Button from "../Button/Button";

const propTypes = {
   item: PropTypes.object.isRequired,
   onClick: PropTypes.func,
};

const defaultProps = {
   item: {},
   onclick: () => {},
};

const MenuItem = ({ item, onClick }) => {
   return (
      <>
         <Button
            fullWidth
            icon={item.icon}
            to={item.to}
            onClick={onClick}
            variant="empty"
         >
            {item.title}
         </Button>
      </>
   );
};

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;

export default MenuItem;
