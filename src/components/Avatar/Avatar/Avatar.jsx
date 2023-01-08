import classnames from "classnames/bind";

import styles from "./Avatar.module.scss";
const cx = classnames.bind(styles);

const Avatar = ({
   width = "100%",
   height = "100%",
   variant = "rectangle",
   status,
   ...passProps
}) => {
   return (
      <div
         className={cx("wrapper", {
            circle: variant === "circle",
            rectangle: variant === "rectangle",
            online: status === "online",
            offline: status === "offline",
         })}
         style={{ width, height }}
      >
         <img alt="" {...passProps} />
         <div className={cx("status")}></div>
      </div>
   );
};

export default Avatar;
