import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import { TextFieldV2 as TextField } from "../../../components/TextField";
import MenuSelect from "../../../components/MenuSelect";
import Button from "../../../components/Button";
import Editor from "../../../components/Editor";
import Avatar from "../../../components/Avatar";
import Icon from "../../../components/Icon";
import IssueTypeIcon from "../../../components/IssueTypeIcon";
import IssuePriorityIcon from "../../../components/IssuePriorityIcon";
import TimeTracking from "../../../layouts/components/TimeTracking";
import Comment from "./Comment";
import SkeletonLoad from "./SkeletonLoad";

import projectAPI from "../../../services/projectAPI";
import anothersAPI from "../../../services/anothersAPI";
import { toggleTaskModal, getTaskById } from "../../../slices/taskSlice";
import { getProjectDetail } from "../../../slices/projectSlice";
import { IssuePriorityCopy, IssueTypeCopy } from "../../../constants/issues";
import { showSuccess, showError } from "../../../utils/toast";
import { copyUrl } from "../../../utils/helper";

import {
   Assignment,
   AssignmentBtn,
   Body,
   BodyLeft,
   BodyRight,
   ControlGroup,
   Header,
   Member,
   MemberName,
   MemberWrapper,
   Status,
   StyledEditorControl,
   StyledTaskType,
   StyledEditor,
   Title,
   TypeName,
   StyledTitle,
   TaskType,
   Priority,
   PriorityName,
   ButtonRemove,
   FormGroup,
} from "./Styles";

const TaskDetailModal = () => {
   const { projectId } = useParams();
   const dispatch = useDispatch();

   const descriptionRef = useRef();
   const timeTrackingRef = useRef();
   const timeSpendRef = useRef();
   const timeRemainRef = useRef();

   const [isEditorVisible, SetIsEditorVisible] = useState(false);

   const { task, isTaskModalOpen, loading } = useSelector(
      (state) => state.task
   );
   const { selectedProject } = useSelector((state) => state.project);

   const handleCloseTaskModal = () => {
      dispatch(getProjectDetail(selectedProject.id));
      dispatch(toggleTaskModal(false));
   };

   const handleOpenEditor = () => {
      SetIsEditorVisible(true);
   };

   const handleCloseEditor = () => {
      SetIsEditorVisible(false);
      descriptionRef.current.setData(task.description);
   };

   const handleUpdateTaskName = (value, inputMethod) => {
      if (value === task?.taskName) return;
      const data = {
         ...task,
         taskName: value,
         listUserAsign: task.assigness.map((item) => item.id),
      };
      projectAPI
         .updateTask(data)
         .then(() => {
            showSuccess("Update task successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            inputMethod.setValue(task.taskName);
            showError(error);
         });
   };

   const handleUpdateTaskType = (value, inputMethod) => {
      const data = {
         ...task,
         typeId: value.id,
         listUserAsign: task.assigness.map((item) => item.id),
      };
      projectAPI
         .updateTask(data)
         .then(() => {
            showSuccess("Update task successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            inputMethod.setValue(task.taskTypeDetail);
            showError(error);
         });
   };

   const handleUpdateDescription = () => {
      projectAPI
         .updateTaskDescription({
            taskId: task.taskId,
            description: descriptionRef.current.getData(),
         })
         .then(() => {
            showSuccess("Update task successful");
            dispatch(getTaskById(task.taskId));
            handleCloseEditor();
         })
         .catch((error) => {
            showError(error);
            descriptionRef.current.setData(task.description);
         });
   };

   const handleChangeStatus = (item, selectMethod) => {
      projectAPI
         .updateTaskStatus({
            taskId: task.taskId,
            statusId: item.statusId,
         })
         .then(() => {
            showSuccess("Change status successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
            selectMethod.setValue(task?.taskStatusDetail);
         });
   };

   const handleChangePriority = (item, selectMethod) => {
      projectAPI
         .updateTaskPriority({
            taskId: task.taskId,
            priorityId: item.priorityId,
         })
         .then(() => {
            showSuccess("Change priority successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
            selectMethod.setValue(task?.priorityTask);
         });
   };

   const handleRemoveUser = (id) => {
      projectAPI
         .removeUserFromTask({
            taskId: task.taskId,
            userId: id,
         })
         .then(() => {
            showSuccess("Remove user successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
         });
   };

   const handleAddUser = (item, selectMethod) => {
      projectAPI
         .updateTask({
            ...task,
            listUserAsign: [
               ...task.assigness.map((item) => item.id),
               item.userId,
            ],
            taskId: task.taskId,
         })
         .then(() => {
            showSuccess("Add user successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
            selectMethod.toggleSelect(false);
         });
   };

   const handleDeleteTask = () => {
      projectAPI
         .deleteTask(task.taskId)
         .then(() => {
            showSuccess("Delte task successful");
            dispatch(toggleTaskModal(false));
            dispatch(getProjectDetail(projectId));
         })
         .catch((error) => {
            showError(error);
         });
   };

   const handleChangeEstimate = (value, inputMethod) => {
      if (value === Number(task?.originalEstimate)) return;

      projectAPI
         .updateTaskEstimate({
            taskId: task.taskId,
            originalEstimate: value,
         })
         .then(() => {
            showSuccess("Update task successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            inputMethod.setValue(task?.originalEstimate);
            showError(error);
         });
   };

   const handleChangeTime = (_) => {
      let timeSpend = timeSpendRef.current.getValue();
      let timeRemain = timeRemainRef.current.getValue();
      if (
         timeSpend === Number(task?.timeTrackingSpent) &&
         timeRemain === Number(task?.timeTrackingRemaining)
      )
         return;

      projectAPI
         .updateTaskTimeTracking({
            taskId: task.taskId,
            timeTrackingSpent: timeSpend,
            timeTrackingRemaining: timeRemain,
         })
         .then(() => {
            showSuccess("Update task successful");
            dispatch(getTaskById(task.taskId));
         })
         .catch((error) => {
            showError(error);
         });
   };

   const hanldeCopyUrl = () => {
      copyUrl(window.location.href);
   };

   return (
      <Dialog
         open={isTaskModalOpen}
         scroll="body"
         maxWidth="md"
         fullWidth={true}
         onClose={handleCloseTaskModal}
      >
         <DialogTitle>
            {loading && !task ? null : (
               <Header>
                  <StyledTaskType>
                     {/*--------------------- TASK TYPE -----------------------*/}
                     <MenuSelect
                        serviceAPI={anothersAPI.getTaskType}
                        value={task?.taskTypeDetail}
                        renderItem={(item, index) => (
                           <TaskType key={index}>
                              <IssueTypeIcon type={item.taskType} center />
                              <TypeName>
                                 {IssueTypeCopy[item.taskType]} - {task?.taskId}
                              </TypeName>
                           </TaskType>
                        )}
                        placement="bottom-start"
                        getSearchKey={(item) => item.taskType}
                        getItemsKey={(item) => item.id}
                        selectPlaceHolder={"Select Task Type"}
                        onChange={handleUpdateTaskType}
                        className="styledMenuSelect"
                     />
                  </StyledTaskType>
                  <ControlGroup>
                     <Button className="controlBtn">
                        <Icon type="feedback" size={14} />
                        <span>Give feedback</span>
                     </Button>
                     <Button className="controlBtn" onClick={hanldeCopyUrl}>
                        <Icon type="link" size={14} />
                        <span>Copy Link</span>
                     </Button>
                     <Button
                        className="controlBtn deleteTaskBtn"
                        onClick={handleDeleteTask}
                     >
                        <Icon type="trash" center />
                     </Button>
                     <Button
                        className="controlBtn"
                        onClick={handleCloseTaskModal}
                     >
                        <Icon type="close" center />
                     </Button>
                  </ControlGroup>
               </Header>
            )}
         </DialogTitle>
         <DialogContent>
            {loading && !task ? (
               <SkeletonLoad />
            ) : (
               <Body>
                  <BodyLeft>
                     <StyledTitle>
                        {/*--------------------- TASK NAME -----------------------*/}
                        <TextField
                           onBlur={handleUpdateTaskName}
                           inputClass="taskName"
                           type="textarea"
                           rows="1"
                           value={task?.taskName || ""}
                           variant="jira"
                           placeholder="Add Short summary"
                           autoHeight
                        />
                     </StyledTitle>
                     <FormGroup>
                        {/*--------------------- TASK DESCRIPTION -----------------------*/}
                        <Title size={15}>Description</Title>
                        <StyledEditor
                           className={`${isEditorVisible ? "visible" : ""}`}
                        >
                           <Editor
                              data={task?.description}
                              editorRef={descriptionRef}
                              onFocus={handleOpenEditor}
                              config={{
                                 placeholder: "Add a description here ...",
                              }}
                           />
                        </StyledEditor>
                        <StyledEditorControl
                           className={`${isEditorVisible ? "visible" : ""}`}
                        >
                           <Button
                              variant="primary"
                              onClick={handleUpdateDescription}
                           >
                              Save
                           </Button>
                           <Button onClick={handleCloseEditor}>Cancel</Button>
                        </StyledEditorControl>
                     </FormGroup>
                     <FormGroup className="comment">
                        {/*--------------------- TASK COMMENTS -----------------------*/}
                        <Title size={15}>Comments</Title>
                        <Comment />
                     </FormGroup>
                  </BodyLeft>
                  <BodyRight>
                     <FormGroup>
                        {/*--------------------- TASK STATUS -----------------------*/}
                        <Title>STATUS</Title>
                        <MenuSelect
                           serviceAPI={anothersAPI.getTaskStatus}
                           value={task?.taskStatusDetail}
                           renderItem={(item) => (
                              <Status key={item.statusName}>
                                 {item.statusName}
                              </Status>
                           )}
                           getSearchKey={(item) => item.statusName}
                           getItemsKey={(item) => item.statusId}
                           onChange={handleChangeStatus}
                           selectPlaceHolder={"Select Status"}
                           arrow
                        />
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK ASSIGNMENT -----------------------*/}
                        <Title>ASSIGNMENT</Title>
                        <MemberWrapper>
                           {task?.assigness.map((item) => (
                              <Member key={item.id}>
                                 <Avatar avatarUrl={item.avatar} size={24} />
                                 <MemberName>{item.name}</MemberName>
                                 <ButtonRemove
                                    onClick={() => handleRemoveUser(item.id)}
                                 >
                                    <Icon type="close" />
                                 </ButtonRemove>
                              </Member>
                           ))}
                           <MenuSelect
                              onChange={handleAddUser}
                              renderItem={(item) => (
                                 <Assignment
                                    className={`${
                                       !!task?.assigness.find(
                                          (x) => x.id === item.userId
                                       )
                                          ? "alreadyExist"
                                          : ""
                                    }`}
                                 >
                                    <Avatar avatarUrl={item.avatar} size={24} />
                                    <span>
                                       {item.name}
                                       {selectedProject.creator.id ===
                                       item.userId
                                          ? " 🔱 (Project owner)"
                                          : ""}
                                    </span>
                                 </Assignment>
                              )}
                              getSearchKey={(item) => item.name}
                              getItemsKey={(item) => item.userId}
                              items={selectedProject?.members.concat([]) || []}
                              rootClass="assignmentBtnWrapper"
                              defaultPlaceHolder={
                                 <AssignmentBtn className="assignmentBtn">
                                    <Icon type="plus" size={15} />
                                    <span>Add User</span>
                                 </AssignmentBtn>
                              }
                           />
                        </MemberWrapper>
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK PRIORITY -----------------------*/}
                        <Title>PRIORITY</Title>
                        <MenuSelect
                           serviceAPI={anothersAPI.getPriorities}
                           value={task?.priorityTask}
                           renderItem={(item) => (
                              <Priority key={item.priorityId}>
                                 <IssuePriorityIcon
                                    priority={`${item.priorityId}`}
                                 />
                                 <PriorityName>
                                    {IssuePriorityCopy[item.priorityId]}
                                 </PriorityName>
                              </Priority>
                           )}
                           getSearchKey={(item) => item.description}
                           getItemsKey={(item) => item.priorityId}
                           selectPlaceHolder={"Select Status"}
                           onChange={handleChangePriority}
                        />
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK ORIGINAL ESTIMATE -----------------------*/}
                        <Title>ORIGINAL ESTIMATE (HOURS)</Title>
                        <TextField
                           variant="jira"
                           type="number"
                           value={task?.originalEstimate || 0}
                           onBlur={handleChangeEstimate}
                           min="0"
                        />
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK TIME TRACKING SPEND -----------------------*/}
                        <Title>Time spend (hours)</Title>
                        <TextField
                           type="number"
                           variant="jira"
                           value={task?.timeTrackingSpent || 0}
                           onBlur={handleChangeTime}
                           ref={timeSpendRef}
                           min="0"
                        />
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK TIME TRACKING REMAINING  -----------------------*/}
                        <Title>Time remaining (hours)</Title>
                        <TextField
                           type="number"
                           variant="jira"
                           value={task?.timeTrackingRemaining || 0}
                           ref={timeRemainRef}
                           onBlur={handleChangeTime}
                           min="0"
                        />
                     </FormGroup>
                     <FormGroup>
                        {/*--------------------- TASK TIME TRACKING  -----------------------*/}
                        <Title>Time Tracking</Title>
                        <TimeTracking
                           ref={timeTrackingRef}
                           timeSpend={task?.timeTrackingSpent}
                           timeRemain={task?.timeTrackingRemaining}
                           label={false}
                        />
                     </FormGroup>
                  </BodyRight>
               </Body>
            )}
         </DialogContent>
      </Dialog>
   );
};

export default TaskDetailModal;
