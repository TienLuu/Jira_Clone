import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import classnames from "classnames/bind";

import Navbar from "./Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import SubNavbar from "./SubNavbar";

import { getProjectDetail } from "../../redux/slices/projectSlice";

import styles from "./ProjectLayout.module.scss";
const cx = classnames.bind(styles);

const ProjectLayout = () => {
   const { projectId } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProjectDetail(projectId));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <div className={cx("wrapper")}>
         <div className={cx("left")}>
            <Navbar />
            <SubNavbar />
         </div>
         <div className={cx("right")}>
            <div className={cx("rightTop")}>
               <Breadcrumbs />
            </div>
            <div className={cx("contentWrapper")}>
               <div className={cx("content")}>
                  <Outlet />
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProjectLayout;
