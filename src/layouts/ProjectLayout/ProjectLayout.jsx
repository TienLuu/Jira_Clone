import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";

import ProjectSidebar from "../components/ProjectSideBar/";
import ProjectNavbar from "../components/ProjectNavbar";
import Breadcrumbs from "../../components/Breadcrumbs";

import { getProjectDetail } from "../../slices/projectSlice";
import {
   Wrapper,
   Navigation,
   Main,
   StyledBreadcrumbs,
   StyledContent,
   WrapperContent,
} from "./Styles";

const ProjectLayout = () => {
   const { projectId } = useParams();
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getProjectDetail(projectId));
   }, [projectId]);

   return (
      <Wrapper>
         <Navigation>
            <ProjectNavbar />
            <ProjectSidebar />
         </Navigation>
         <Main>
            <StyledBreadcrumbs>
               <Breadcrumbs />
            </StyledBreadcrumbs>
            <WrapperContent>
               <StyledContent>
                  <Outlet />
               </StyledContent>
            </WrapperContent>
         </Main>
         <ToastContainer transition={Slide} />
      </Wrapper>
   );
};

export default ProjectLayout;
