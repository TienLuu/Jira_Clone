import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { ProjectLogo } from "../../../components/SVG/SVG";
import Icon from "../../../components/Icon";

import useToggle from "../../../hooks/useToggle";
import { ProjectCategoryCopy } from "../../..//constants/projects";
import {
   Sidebar,
   ProjectInfo,
   ProjectTexts,
   ProjectName,
   ProjectCategory,
   Divider,
   LinkItem,
   LinkText,
   NotImplemented,
   ResizeControl,
   StyledIcon,
   StyledLine,
   Navigate,
   Container,
} from "./Styles";

const ProjectSidebar = () => {
   const { selectedProject } = useSelector((state) => state.project);

   const [expand, toggleExpand] = useToggle(() => {
      if (window.innerWidth < 768) {
         return false;
      }
      return true;
   });

   return (
      <Sidebar className={`${expand ? "expand" : ""}`}>
         <Container>
            <ProjectInfo className="project">
               <ProjectLogo />
               <ProjectTexts>
                  <ProjectName>{selectedProject?.alias}</ProjectName>
                  <ProjectCategory>
                     {
                        ProjectCategoryCopy[
                           selectedProject?.projectCategory.name
                        ]
                     }{" "}
                     project
                  </ProjectCategory>
               </ProjectTexts>
            </ProjectInfo>
            <Navigate className="navigate">
               {renderLinkItem(
                  "Kanban Board",
                  "board",
                  "/board",
                  selectedProject?.id
               )}
               {renderLinkItem(
                  "Project settings",
                  "settings",
                  "/settings",
                  selectedProject?.id
               )}
               <Divider />
               {renderLinkItem("Releases", "shipping")}
               {renderLinkItem("Issues and filters", "issues")}
               {renderLinkItem("Pages", "page")}
               {renderLinkItem("Reports", "reports")}
               {renderLinkItem("Components", "component")}
            </Navigate>
         </Container>
         <ResizeControl>
            <StyledIcon onClick={toggleExpand} className="toggleBtn">
               <Icon type="chevron-left" size={20} />
            </StyledIcon>
            <StyledLine className="boundaryLine"></StyledLine>
         </ResizeControl>
      </Sidebar>
   );
};

const renderLinkItem = (text, iconType, path, id) => {
   const isImplemented = !!path;

   const linkItemProps = isImplemented
      ? { as: NavLink, to: `/projects/${id}${path}` }
      : { as: "div" };

   return (
      <LinkItem {...linkItemProps}>
         <Icon type={iconType} />
         <LinkText>{text}</LinkText>
         {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
      </LinkItem>
   );
};

export default ProjectSidebar;
