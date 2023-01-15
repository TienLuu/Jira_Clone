import PropTypes from "prop-types";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import Tippy from "@tippyjs/react/headless";

import Popper from "../Popper";

import useRequest from "../../hooks/useRequest";
import useUpdateValue from "../../hooks/useUpdateValue";
import {
   Wrapper,
   WrapperPopper,
   Search,
   WrapperList,
   Item,
   Empty,
   Loadmore,
   StyledTitle,
   Title,
   IconTitle,
} from "./Styles";
import Icon from "../Icon";

const propTypes = {
   trigger: PropTypes.string,
   placeholder: PropTypes.string,
   items: PropTypes.array,
   maxRender: PropTypes.number,
   stepRender: PropTypes.number.isRequired,
   value: PropTypes.any,
   renderItem: PropTypes.func.isRequired,
   getItemsKey: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func,
   getSearchKey: PropTypes.func.isRequired,
   searchPlaceholder: PropTypes.string,
   selectPlaceHolder: PropTypes.node,
   defaultPlaceHolder: PropTypes.node,
   label: PropTypes.string,
   rootClass: PropTypes.string,
   arrow: PropTypes.any,
   serviceAPI: PropTypes.func,
   hideOnSelect: PropTypes.bool,
};

const defaultProps = {
   trigger: "click",
   placement: "bottom",
   items: [],
   stepRender: 5,
   renderItem: (item) => item,
   getItemsKey: (item) => item,
   onChange: () => {},
   onBlur: () => {},
   getSearchKey: (item) => item,
   searchPlaceholder: "Search",
   hideOnSelect: true,
};

const MenuSelect = forwardRef(
   (
      {
         trigger,
         placement,
         items,
         maxRender,
         stepRender,
         value,
         renderItem,
         getItemsKey,
         onChange,
         onBlur,
         getSearchKey,
         searchPlaceholder,
         selectPlaceHolder,
         defaultPlaceHolder,
         label,
         rootClass,
         arrow,
         serviceAPI,
         hideOnSelect = true,
         ...props
      },
      ref
   ) => {
      let options = items;
      const API = useRequest(serviceAPI, { manual: true });
      const [visible, setVisible] = useState(false);
      const [maximum, setMaximum] = useState(maxRender);
      const [searchInput, setSearchInput] = useState("");
      const [selectedItem, setSelectedItem] = useUpdateValue(value);

      if (API.data) {
         options = API.data;
      }

      let filterItem = options;

      if (searchInput) {
         filterItem = options.filter((item) => {
            return getSearchKey(item)
               .toLowerCase()
               .includes(searchInput.toLocaleLowerCase());
         });
      }

      let leftItems;
      if (maximum && maximum < filterItem.length) {
         leftItems = filterItem.length - maximum;
         filterItem = filterItem.slice(0, maximum);
      }

      const selectMethod = {
         setValue: (value) => {
            setSelectedItem(value);
         },
         getValue: () => {
            return selectedItem;
         },
         toggleSelect: (boolean) => {
            setVisible((prev) => boolean ?? !prev);
         },
         stateSelect: !visible,
      };

      const handleSelect = (item) => {
         setTimeout(() => {
            onChange(item, selectMethod);
         }, 0);
         if (!hideOnSelect) return;
         setVisible(false);
         setSelectedItem(item);
      };

      const handleLoadMore = () => {
         setMaximum((prev) => prev + stepRender);
      };

      useImperativeHandle(ref, () => {
         return selectMethod;
      });

      useEffect(() => {
         if (!serviceAPI) return;
         if (options.length > 0) return;

         API.run();
         // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

      return (
         <Wrapper {...props}>
            {label ? <label htmlFor="">{label}</label> : null}
            <Tippy
               visible={visible}
               interactive
               placement={placement}
               delay={[null, 200]}
               onClickOutside={() => {
                  setVisible(false);
                  setMaximum(maxRender);
                  setSearchInput("");
               }}
               render={(attrs) => (
                  <WrapperPopper tabIndex="-1" {...attrs}>
                     <Popper>
                        <Search>
                           <input
                              type="text"
                              value={searchInput}
                              placeholder={searchPlaceholder}
                              onChange={(evt) =>
                                 setSearchInput(evt.target.value)
                              }
                           />
                        </Search>
                        <div>
                           {API.loading ? "Loading" : null}
                           <WrapperList>
                              {filterItem.length > 0 ? (
                                 filterItem.map((item, index) => (
                                    <Item
                                       key={getItemsKey(item) || index}
                                       onClick={() => handleSelect(item)}
                                    >
                                       {renderItem(item)}
                                    </Item>
                                 ))
                              ) : (
                                 <Empty>No results</Empty>
                              )}
                           </WrapperList>
                           {leftItems > 0 ? (
                              <Loadmore onClick={handleLoadMore}>
                                 Load more
                              </Loadmore>
                           ) : null}
                        </div>
                     </Popper>
                  </WrapperPopper>
               )}
            >
               <StyledTitle
                  className={` ${rootClass ? rootClass : ""}`}
                  onClick={() => setVisible(true)}
               >
                  <Title>
                     {defaultPlaceHolder
                        ? defaultPlaceHolder
                        : selectedItem
                        ? renderItem(selectedItem)
                        : selectPlaceHolder}
                  </Title>
                  {arrow ? (
                     <IconTitle>
                        {visible ? (
                           <Icon type="arrow-up" />
                        ) : (
                           <Icon type="arrow-down" />
                        )}
                     </IconTitle>
                  ) : null}
               </StyledTitle>
            </Tippy>
         </Wrapper>
      );
   }
);

MenuSelect.propTypes = propTypes;
MenuSelect.defaultProps = defaultProps;

export default MenuSelect;
