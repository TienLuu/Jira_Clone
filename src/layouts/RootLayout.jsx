import { Outlet } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import Header from "./components/Header";

import { Container, Main } from "./Styles";

const RootLayout = () => {
   const HEIGHT = "60";

   return (
      <Container height={HEIGHT}>
         <Header height={HEIGHT} />
         <Main>
            <Outlet />
         </Main>
         <ToastContainer transition={Slide} />
      </Container>
   );
};

export default RootLayout;
