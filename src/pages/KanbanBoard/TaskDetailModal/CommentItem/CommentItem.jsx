import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { TextFieldV2 as TextField } from "../../../../components/TextField";
import Button from "../../../../components/Button";
import Avatar from "../../../../components/Avatar";

import {
   CommentContent,
   CommentOwner,
   EditControl,
   InputControl,
   InputWrapper,
   Item,
} from "./Styles";

const propTypes = {
   item: PropTypes.object,
   onSubmit: PropTypes.func,
   onDelete: PropTypes.func,
   inputHelperText: PropTypes.string,
};

const defaultProps = {
   onSubmit: () => {},
   onDelete: () => {},
};

const CommentItem = ({ item, onSubmit, onDelete, inputHelperText }) => {
   const { user } = useSelector((state) => state.auth);
   const [IsEditing, setIsEditing] = useState(false);
   const [loadingSaveBtn, setLoadingSaveBtn] = useState(false);
   const ref = useRef();

   const isOwner = item.idUser === user.id;

   const handleOpenEdit = () => {
      setIsEditing(true);

      setTimeout(() => {
         ref.current.getInputNode().focus?.();
      }, 0);
   };

   const handleCloseEdit = () => {
      setIsEditing(false);
   };

   const method = {
      handleOpenEdit,
      handleCloseEdit,
      setLoadingSaveBtn,
   };

   const handleSubmit = () => {
      onSubmit(item, ref, method);
   };

   const handleDelete = () => {
      onDelete(item, ref, method);
   };

   if (!item) return null;

   return (
      <Item
         className={`${isOwner ? "owner" : ""} ${IsEditing ? "editing" : ""}`}
      >
         <Avatar avatarUrl={item.avatar} size={30} />
         <InputWrapper className="inputWrapper">
            <CommentOwner>{item.name}</CommentOwner>
            <CommentContent className="commentContent">
               {item.commentContent}
            </CommentContent>
            {isOwner ? (
               <>
                  {IsEditing ? (
                     <TextField
                        className="inputRoot"
                        value={item.commentContent || ""}
                        inputClass="input"
                        type="textarea"
                        rows="3"
                        variant="jira"
                        placeholder="Add a comment..."
                        ref={ref}
                     />
                  ) : null}
                  {inputHelperText}
                  <EditControl className="editControl">
                     <button onClick={handleOpenEdit}>Edit</button>
                     <span>▪</span>
                     <button onClick={handleDelete}>Delete</button>
                  </EditControl>
                  <InputControl className="inputControl">
                     <Button
                        variant="primary"
                        onClick={handleSubmit}
                        disable={loadingSaveBtn}
                     >
                        Save
                     </Button>
                     <Button onClick={handleCloseEdit}>Cancel</Button>
                  </InputControl>
               </>
            ) : null}
         </InputWrapper>
      </Item>
   );
};

CommentItem.propTypes = propTypes;
CommentItem.defaultProps = defaultProps;

export default CommentItem;
