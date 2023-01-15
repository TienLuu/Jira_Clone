import { Outlet } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";

import Logo from "../../components/SVG/Logo";
import {
   AuthPage,
   AuthPageInner,
   Wrapper,
   BackgroundImg,
   Container,
   Main,
   Footer,
   Text,
} from "./Styles";

const Auth = () => {
   return (
      <AuthPage>
         <AuthPageInner>
            <Wrapper>
               <BackgroundImg></BackgroundImg>
               <Container>
                  <div>
                     <Logo classname="large" id="loginHeader" light />
                     <Main>
                        <Outlet />
                     </Main>
                  </div>
                  <Footer>
                     <Logo id="loginFooter" />
                     <Text>One account for Jira, Confluence, Trello and</Text>
                  </Footer>
               </Container>
            </Wrapper>
         </AuthPageInner>
         <ToastContainer transition={Slide} />
      </AuthPage>
   );
};

export default Auth;
