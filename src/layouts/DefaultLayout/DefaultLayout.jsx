import React from "react";
import { Outlet } from "react-router-dom";
import classnames from "classnames/bind";

import Header from "../components/Header/Header";

import styles from "./DefaultLayout.module.scss";
const cx = classnames.bind(styles);

const DefaultLayout = () => {
   return (
      <div className={cx("wrapper")}>
         <Header />
         <div className={cx("content")}>
            <Outlet />
         </div>
      </div>
   );
};

export default DefaultLayout;
