import { NoDocument } from "../../SVG/SVG";
import { Wrapper } from "./Styles";

const CustomNoRowsOverlay = () => {
   return (
      <Wrapper>
         <NoDocument />
         <p>No Data Available</p>
      </Wrapper>
   );
};

export default CustomNoRowsOverlay;
