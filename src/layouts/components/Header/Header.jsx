import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GitHub } from "@mui/icons-material";
import classnames from "classnames/bind";

import { JiraLogo } from "../../../components/SVG";
import Button from "../../../components/Button";
import MoreMenu from "../../../components/MoreMenu";
import { Avatar } from "../../../components/Avatar";

import { logout } from "../../../redux/slices/authSlice";

import styles from "./Header.module.scss";
const cx = classnames.bind(styles);

const Header = () => {
   const navigate = useNavigate();
   const location = useLocation();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);

   const menuUser = [
      { title: "Profile", action: "get-profile" },
      { title: "Logout", action: "logout", seperate: true },
   ];

   const menuAuth = [
      { title: "Register", action: "register" },
      { title: "Login", action: "login" },
   ];

   const handleSelectOption = ({ action }) => {
      if (action === "get-profile") {
         navigate(`/jira/users/${user.id}`);
         return;
      }

      if (action === "logout") {
         dispatch(logout());
         navigate(`/login`);
         return;
      }

      if (action === "register") {
         navigate(`/register?redirectUrl=${location.pathname}`);
         return;
      }

      if (action === "login") {
         navigate(`/login?redirectUrl=${location.pathname}`);
         return;
      }
   };

   return (
      <div className={cx("wrapper")}>
         <div className={cx("logo")}>
            <JiraLogo width={20} height={20} />
            <h1>Jira Software</h1>
         </div>
         <div className={cx("navigation")}>
            <ul className={cx("list")}>
               <li className={cx("item")}>
                  <NavLink
                     to="/jira/my-works"
                     className={({ isActive }) =>
                        cx("link", { active: isActive })
                     }
                  >
                     My Works
                  </NavLink>
               </li>
               <li className={cx("item")}>
                  <NavLink
                     to="/jira/projects"
                     className={({ isActive }) =>
                        cx("link", { active: isActive })
                     }
                  >
                     Projects
                  </NavLink>
               </li>
               <li className={cx("item")}>
                  <NavLink
                     to="/jira/users"
                     className={({ isActive }) =>
                        cx("link", { active: isActive })
                     }
                  >
                     Users
                  </NavLink>
               </li>
            </ul>
         </div>
         <div className={cx("right")}>
            <Button solid leftIcon={<GitHub />} className={cx("githubBtn")}>
               Github Repo
            </Button>
            {user ? (
               <MoreMenu items={menuUser} onChange={handleSelectOption}>
                  <div className={cx("avatarWrapper")}>
                     <Avatar src={user?.avatar} variant="circle" />
                  </div>
               </MoreMenu>
            ) : (
               <>
                  <MoreMenu items={menuAuth} onChange={handleSelectOption}>
                     <span>Login/register</span>
                  </MoreMenu>
               </>
            )}
         </div>
      </div>
   );
};

export default Header;
