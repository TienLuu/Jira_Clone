import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TextFieldV2 as TextField } from "../../../../components/TextField";
import Button from "../../../../components/Button";
import Avatar from "../../../../components/Avatar";
import CommentItem from "../CommentItem";

import commentAPI from "../../../../services/commentAPI";
import { getTaskById } from "../../../../slices/taskSlice";
import useRequest from "../../../../hooks/useRequest";
import { showSuccess, showError } from "../../../../utils/toast";

import {
   CommentList,
   InputControl,
   InputGroup,
   InputHelper,
   InputWrapper,
   Wrapper,
} from "./Styles";

const Comment = () => {
   const dispatch = useDispatch();

   const { user } = useSelector((state) => state.auth);
   const { task } = useSelector((state) => state.task);
   const commentRef = useRef();

   const [isCommentInputVisible, SetIsCommentInputVisible] = useState(false);

   const createComment = useRequest(commentAPI.createComment, { manual: true });

   const handleOpenCommentInput = () => {
      SetIsCommentInputVisible(true);
   };

   const handleCloseCommentInput = () => {
      SetIsCommentInputVisible(false);
   };

   const handleAddComment = () => {
      if (!commentRef.current.getValue()) {
         showError("Please enter your comment!");
         return;
      }

      createComment
         .runAsync({
            taskId: task.taskId,
            contentComment: commentRef.current.getValue(),
         })
         .then(() => {
            showSuccess("Add comment successful");
            commentRef.current.setValue("");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
         });
   };

   const handleUpdateComment = (item, inputRef, formMethod) => {
      formMethod.setLoadingSaveBtn(true);
      commentAPI
         .updateComment({
            id: item.id,
            contentComment: inputRef.current.getValue(),
         })
         .then(() => {
            showSuccess("Update comment successful");
            formMethod.handleCloseEdit();
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
         })
         .finally(() => {
            formMethod.setLoadingSaveBtn(false);
         });
   };

   const handleDeleteComment = (item) => {
      commentAPI
         .deleteComment(item.id)
         .then(() => {
            showSuccess("Delete comment successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
         });
   };

   return (
      <Wrapper>
         <InputWrapper>
            <Avatar avatarUrl={user?.avatar} size={30} />
            <InputGroup className={`${isCommentInputVisible ? "visible" : ""}`}>
               <TextField
                  className="inputRoot"
                  inputClass="input"
                  type="textarea"
                  rows="1"
                  variant="jira"
                  placeholder="Add a comment..."
                  onClick={handleOpenCommentInput}
                  autoHeight
                  ref={commentRef}
               />
               <InputHelper className="inputHelper">
                  <span>Pro tip: </span>
                  press <span>M</span> to comment
               </InputHelper>
               <InputControl className="inputControl">
                  <Button
                     variant="primary"
                     onClick={handleAddComment}
                     disable={createComment.loading}
                  >
                     Save
                  </Button>
                  <Button onClick={handleCloseCommentInput}>Cancel</Button>
               </InputControl>
            </InputGroup>
         </InputWrapper>
         <CommentList>
            {task?.lstComment
               .slice()
               .reverse()
               .map((item) => (
                  <CommentItem
                     key={item.id}
                     item={item}
                     onSubmit={handleUpdateComment}
                     onDelete={handleDeleteComment}
                  />
               ))}
         </CommentList>
      </Wrapper>
   );
};

export default Comment;
