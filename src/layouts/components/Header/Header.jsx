import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Logo from "../../../components/SVG/Logo";
import Button from "../../../components/Button";
import MoreMenu from "../../../components/MoreMenu";
import Avatar from "../../../components/Avatar";

import { logout } from "../../../slices/authSlice";
import { menuUser } from "./header-config";
import {
   Container,
   Navigation,
   MoreInfo,
   StyledLogo,
   NavItem,
   Nav,
} from "./Styled";

const propTypes = {
   height: PropTypes.string.isRequired,
};

const Header = ({ height }) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);

   const handleSelectOption = ({ action }) => {
      if (action === "get-profile") {
         navigate(`/users/${user.id}`);
         return;
      }

      if (action === "signout") {
         dispatch(logout());
         navigate(`/signin`);
         return;
      }
   };

   return (
      <Container height={height}>
         <StyledLogo onClick={() => navigate("/")}>
            <Logo id="header" light />
         </StyledLogo>
         <Navigation className="navigation">
            <Nav>
               <NavItem>
                  <NavLink
                     to="/mywork"
                     className={({ isActive }) => `${isActive ? "active" : ""}`}
                  >
                     My Works
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     to="/projects"
                     className={({ isActive }) => `${isActive ? "active" : ""}`}
                  >
                     Projects
                  </NavLink>
               </NavItem>
               <NavItem>
                  <NavLink
                     to="/users"
                     className={({ isActive }) => `${isActive ? "active" : ""}`}
                  >
                     Users
                  </NavLink>
               </NavItem>
            </Nav>
         </Navigation>
         <MoreInfo>
            <NavLink to="/githubrepo" target="_blank">
               <Button icon="github">Github Repo</Button>
            </NavLink>
            <MoreMenu items={menuUser} onChange={handleSelectOption}>
               <div className="avatarWrapper">
                  <Avatar avatarUrl={user.avatar} />
               </div>
            </MoreMenu>
         </MoreInfo>
      </Container>
   );
};

Header.propTypes = propTypes;

export default Header;
