import styled from "styled-components";

export const Container = styled.div`
   display: flex;
   flex: 1 1;
   flex-direction: column;
   padding-top: ${(props) => props.height}px;
   padding-bottom: ${(props) => props.height}px;
   min-height: 100vh;
`;

export const Main = styled.div`
   display: flex;
   flex: 1 1;
   flex-direction: column;
   height: 100%;
`;
