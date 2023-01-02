import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import ReportProblemIcon from "@mui/icons-material/ReportProblem";

import styles from "./MyCkEditor.module.scss";

const MyCkEditor = ({ label, error, editorRef = {}, ...passProps }) => {
   return (
      <div className={styles.wrapper}>
         <label>{label}</label>
         <div className={styles.editorWrapper}>
            <CKEditor
               editor={ClassicEditor}
               onReady={(editor) => {
                  editorRef.current = editor;
                  // You can store the "editor" and use when it is needed.
               }}
               {...passProps}
            />
         </div>
         {error && (
            <p className={styles.errorMess}>
               <ReportProblemIcon fontSize="inherit" color="inherit" />
               {error}
            </p>
         )}
      </div>
   );
};

export default MyCkEditor;
