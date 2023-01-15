import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import Icon from "../Icon";
import { StyledLabel, StyledError, Wrapper } from "./Styles";

const propTypes = {
   label: PropTypes.string,
   error: PropTypes.any,
   editorRef: PropTypes.object.isRequired,
};

const defaultProps = {
   editorRef: {},
};

const Editor = ({ label, error, editorRef, ...passProps }) => {
   return (
      <Wrapper>
         {label ? <StyledLabel>{label}</StyledLabel> : null}
         <div>
            <CKEditor
               editor={ClassicEditor}
               onReady={(editor) => {
                  editorRef.current = editor;
               }}
               {...passProps}
            />
         </div>
         {error && (
            <StyledError>
               <Icon type="help" />
               {error}
            </StyledError>
         )}
      </Wrapper>
   );
};

Editor.propTypes = propTypes;
Editor.defaultProps = defaultProps;

export default Editor;
