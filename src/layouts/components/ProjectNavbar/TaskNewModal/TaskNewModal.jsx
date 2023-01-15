import React, {
   useState,
   useRef,
   forwardRef,
   useImperativeHandle,
} from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import { TextFieldV2 as TextField } from "../../../../components/TextField";
import MenuSelect from "../../../../components/MenuSelect";
import Editor from "../../../../components/Editor";
import Button from "../../../../components/Button";
import Icon from "../../../../components/Icon";
import IssueTypeIcon from "../../../../components/IssueTypeIcon";
import IssuePriorityIcon from "../../../../components/IssuePriorityIcon";
import MultiSelectUser from "../../MultiSelectUser";
import TimeTracking from "../../TimeTracking";

import projectAPI from "../../../../services/projectAPI";
import anothersAPI from "../../../../services/anothersAPI";
import { getProjectDetail } from "../../../../slices/projectSlice";
import { IssueTypeCopy, IssuePriorityCopy } from "../../../../constants/issues";
import { showError, showSuccess } from "../../../../utils/toast";

import {
   Body,
   ButtonConfirm,
   Footer,
   FormGroup,
   Header,
   Priority,
   Status,
   StyledButtonClose,
   StyledTitle,
   TaskType,
   TypeName,
} from "./Styles";

const TaskNewModal = forwardRef((_, ref) => {
   const { projectId } = useParams();
   const [isOpen, setIsOpen] = useState(false);

   const dispatch = useDispatch();
   const timeTrackingRef = useRef();

   const taskTypeRef = useRef();
   const taskPriorityRef = useRef();
   const taskNameRef = useRef();
   const descriptionRef = useRef();
   const taskStatusRef = useRef();
   const taskAssignmentRef = useRef();
   const orinalEstimateRef = useRef();
   const timeRemaningRef = useRef();
   const timeSpendingRef = useRef();

   const modalMethod = {
      toggleModal: (boolean) => {
         setIsOpen(boolean);
      },
   };

   useImperativeHandle(ref, () => modalMethod);

   const handleCreateTask = async () => {
      try {
         const data = {
            listUserAsign: taskAssignmentRef.current
               .getValue()
               .map((item) => item.userId),

            taskName: taskNameRef.current.getValue(),
            description: descriptionRef.current.getData(),
            statusId: taskStatusRef.current.getValue()?.statusId,
            originalEstimate: orinalEstimateRef.current.getValue(),
            timeTrackingSpent: timeSpendingRef.current.getValue(),
            timeTrackingRemaining: timeRemaningRef.current.getValue(),
            projectId: projectId,
            typeId: taskTypeRef.current.getValue()?.id,
            priorityId: taskPriorityRef.current.getValue()?.priorityId,
         };

         await projectAPI.createTask(data);

         showSuccess("Create task success");
         dispatch(getProjectDetail(projectId));
         setIsOpen(false);
      } catch (error) {
         showError(error);
      }
   };

   return (
      <Dialog
         open={isOpen}
         scroll="body"
         maxWidth="sm"
         fullWidth={true}
         onClose={() => setIsOpen(false)}
      >
         <DialogTitle>
            <Header>
               <StyledTitle>
                  <h3>Create New Task</h3>
               </StyledTitle>
               <StyledButtonClose>
                  <Button
                     className="buttonClose"
                     onClick={() => setIsOpen(false)}
                     iconSize={24}
                  >
                     <Icon type="close" />
                  </Button>
               </StyledButtonClose>
            </Header>
         </DialogTitle>
         <DialogContent>
            <Body>
               <MenuSelect
                  serviceAPI={anothersAPI.getTaskType}
                  renderItem={(item) => (
                     <TaskType>
                        <IssueTypeIcon type={item.taskType} />
                        <TypeName>{IssueTypeCopy[item.taskType]}</TypeName>
                     </TaskType>
                  )}
                  getSearchKey={(item) => item.taskType}
                  getItemsKey={(item) => item.id}
                  label="Task type"
                  selectPlaceHolder={"Select Task Type"}
                  ref={taskTypeRef}
               />
               <MenuSelect
                  serviceAPI={anothersAPI.getPriorities}
                  renderItem={(item) => (
                     <Priority>
                        <IssuePriorityIcon priority={`${item.priorityId}`} />
                        <TypeName>
                           {IssuePriorityCopy[item.priorityId]}
                        </TypeName>
                     </Priority>
                  )}
                  getSearchKey={(item) => item.description}
                  getItemsKey={(item) => item.priorityId}
                  selectPlaceHolder={"Select Status"}
                  label="Priority"
                  ref={taskPriorityRef}
               />
               <MenuSelect
                  serviceAPI={anothersAPI.getTaskStatus}
                  renderItem={(item) => <Status>{item.statusName}</Status>}
                  label="Status"
                  getSearchKey={(item) => item.statusName}
                  getItemsKey={(item) => item.statusId}
                  selectPlaceHolder={"Select Status"}
                  arrow
                  ref={taskStatusRef}
               />
               <TextField
                  label="Short summary"
                  ref={taskNameRef}
                  variant="jira"
               />
               <Editor label="Description" editorRef={descriptionRef} />
               <MultiSelectUser ref={taskAssignmentRef} />
               <FormGroup>
                  <TextField
                     label="Original estiamte (hours)"
                     variant="jira"
                     type="number"
                     value={0}
                     ref={orinalEstimateRef}
                  />
                  <TimeTracking ref={timeTrackingRef} />
               </FormGroup>
               <FormGroup>
                  <TextField
                     label="Time remaining (hours)"
                     variant="jira"
                     value={0}
                     type="number"
                     ref={timeRemaningRef}
                     onChange={(value) => {
                        timeTrackingRef.current.setTimeRemaining(value);
                     }}
                  />
                  <TextField
                     label="Time spend (hours)"
                     variant="jira"
                     value={0}
                     type="number"
                     ref={timeSpendingRef}
                     onChange={(value) => {
                        timeTrackingRef.current.setTimeSpending(value);
                     }}
                  />
               </FormGroup>
            </Body>
            <Footer>
               <ButtonConfirm>
                  <Button variant="primary" onClick={handleCreateTask}>
                     Create task
                  </Button>
                  <Button onClick={() => setIsOpen(false)}>Cancel</Button>
               </ButtonConfirm>
            </Footer>
         </DialogContent>
      </Dialog>
   );
});

export default TaskNewModal;
