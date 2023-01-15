import { useRef } from "react";

import Icon from "../../../components/Icon";
import TaskNewModal from "./TaskNewModal";
import {
   NavLeft,
   LogoLink,
   StyledLogo,
   Bottom,
   Item,
   ItemText,
} from "./Styles";

const ProjectNavbar = () => {
   const TaskNewModalRef = useRef();

   const handleToggleModal = () => {
      TaskNewModalRef.current.toggleModal(true);
   };

   return (
      <NavLeft>
         <LogoLink to="/">
            <StyledLogo color="#fff" />
         </LogoLink>

         <Item>
            <Icon type="search" size={22} top={1} left={3} />
            <ItemText>Search issues</ItemText>
         </Item>

         <Item onClick={handleToggleModal}>
            <Icon type="plus" size={27} />
            <ItemText>Create Issue</ItemText>
         </Item>

         <Bottom>
            <Item>
               <Icon type="help" size={27} />
               <ItemText>About</ItemText>
            </Item>
         </Bottom>
         <TaskNewModal ref={TaskNewModalRef} />
      </NavLeft>
   );
};

export default ProjectNavbar;
