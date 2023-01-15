import React from "react";
import { useParams } from "react-router-dom";
import { Title, Wrapper } from "./Styles";

const Entry = () => {
   const { projectId } = useParams();
   return (
      <Wrapper>
         <Title>
            WELCOME TO PROJECT <span>{projectId}</span>
         </Title>
      </Wrapper>
   );
};

export default Entry;
