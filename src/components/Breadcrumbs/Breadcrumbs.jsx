import { Fragment } from "react";
import { useHref, NavLink } from "react-router-dom";
import { Container, Divider, StyledNavLink } from "./Styles";

const Breadcrumbs = () => {
   const href = useHref();

   const breadcrums = [];
   let string = "";
   decodeURI(href)
      .split("/")
      .slice(1)
      .forEach((item) => {
         string += "/" + encodeURI(item);
         breadcrums.push({
            path: string,
            name: item,
         });
      });

   return (
      <Container>
         {breadcrums.map((location, index) => (
            <Fragment key={index}>
               <StyledNavLink>
                  <NavLink
                     to={location.path}
                     key={index}
                     className={`${
                        index === breadcrums.length - 1 ? "rightHere" : ""
                     }`}
                  >
                     {location.name.replaceAll("-", " ")}
                  </NavLink>
               </StyledNavLink>
               {index !== breadcrums.length - 1 ? <Divider>/</Divider> : null}
            </Fragment>
         ))}
      </Container>
   );
};

export default Breadcrumbs;
