import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";

import { Container, Wrapper, Menu } from "./Styles";
import Popper from "../Popper/Popper";
import MenuItem from "./MenuItem";

const propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array.isRequired,
   placement: PropTypes.string,
   onChange: PropTypes.func,
   rootActiveClass: PropTypes.string,
   trigger: PropTypes.oneOf([
      "click",
      "focusin",
      "mouseenter focus",
      "mouseenter click",
      "manual",
   ]),
};

const defaultProps = {
   items: [],
   trigger: "click",
   onChange: () => {},
   placement: "bottom",
   rootActiveClass: "",
};

const MoreMenu = ({
   children,
   items,
   trigger,
   onChange,
   placement,
   rootActiveClass,
   ...props
}) => {
   const [listItem, setListItem] = useState([]);
   const [active, setActive] = useState(false);

   const handleClick = (item) => {
      onChange(item);
   };

   useEffect(() => {
      setListItem(items);
   }, [items]);

   const renderMenuDropDown = (
      <Popper>
         {listItem.map((item, index) => (
            <MenuItem
               key={index}
               item={item}
               onClick={() => handleClick(item)}
            />
         ))}
      </Popper>
   );

   return (
      <Container>
         <Tippy
            {...props}
            interactive
            trigger={trigger}
            placement={placement}
            delay={[null, 200]}
            onTrigger={() => setActive(true)}
            onHidden={() => setActive(false)}
            render={(attrs) => (
               <Wrapper tabIndex="-1" {...attrs}>
                  {renderMenuDropDown}
               </Wrapper>
            )}
         >
            <Menu
               onClick={(e) => {
                  e.stopPropagation();
               }}
               className={`${active ? [rootActiveClass] : ""}`}
            >
               {children}
            </Menu>
         </Tippy>
      </Container>
   );
};

MoreMenu.propTypes = propTypes;
MoreMenu.defaultProps = defaultProps;

export default MoreMenu;
