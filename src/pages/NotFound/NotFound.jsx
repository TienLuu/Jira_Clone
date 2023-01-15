import { Link } from "react-router-dom";

import Button from "../../components/Button";
import { Main, StyledImg, Subtitle, Title, Wrapper } from "./Styles";

const NotFound = () => {
   return (
      <Wrapper>
         <StyledImg>
            <img
               src="https://res.cloudinary.com/dzzfmvtiu/image/upload/v1670326080/movie-ticketbooking/page-not-found_zkirlp.svg"
               alt="PageNotFound"
            />
         </StyledImg>
         <Main>
            <Title>We can't find that page</Title>
            <Subtitle>
               We're fairly sure that page used to be here, but seems to have
               gone missing. We do apologise on it's behalf.
            </Subtitle>
            <Link to="/">
               <Button variant="primary">Home</Button>
            </Link>
         </Main>
      </Wrapper>
   );
};

export default NotFound;
