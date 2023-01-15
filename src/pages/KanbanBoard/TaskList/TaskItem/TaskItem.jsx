import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Draggable } from "react-beautiful-dnd";
import { AvatarGroup } from "@mui/material";

import MoreMenu from "../../../../components/MoreMenu";
import Avatar from "../../../../components/Avatar";
import Button from "../../../../components/Button";
import Icon from "../../../../components/Icon";
import PathToolTip from "../../../../components/PathToolTip";
import IssuePriorityIcon from "../../../../components/IssuePriorityIcon/IssuePriorityIcon";
import IssueTypeIcon from "../../../../components/IssueTypeIcon/IssueTypeIcon";

import { getTaskById, toggleTaskModal } from "../../../../slices/taskSlice";
import { getProjectDetail } from "../../../../slices/projectSlice";
import projectAPI from "../../../../services/projectAPI";
import { IssueTypeCopy, IssuePriorityCopy } from "../../../../constants/issues";
import { showError, showSuccess } from "../../../../utils/toast";

import {
   StyledButton,
   StyledTitle,
   StyledTaskItem,
   TaskInfo,
   MemberAvatar,
   TaskProperty,
   Title,
} from "./Styles";

const itemsMenu = [
   {
      title: "Delete",
      action: "delete",
   },
];

const TaskItem = ({ task, index }) => {
   const { projectId } = useParams();
   const dispatch = useDispatch();

   const handleSelectTask = () => {
      dispatch(toggleTaskModal(true));
      dispatch(getTaskById(task.taskId));
   };

   const handleDeleteTask = async () => {
      try {
         await projectAPI.deleteTask(task.taskId);

         showSuccess("Delete task success");
         dispatch(getProjectDetail(projectId));
      } catch (error) {
         showError(error);
      }
   };

   const handleSelectMenu = (item) => {
      if (item.action === "delete") {
         handleDeleteTask(task.taskId);
      }
   };

   return (
      <Draggable draggableId={task.taskId.toString()} index={index}>
         {(provider, snapshot) => (
            <StyledTaskItem
               {...provider.draggableProps}
               {...provider.dragHandleProps}
               ref={provider.innerRef}
               onClick={handleSelectTask}
            >
               <StyledTitle>
                  <Title>{task.taskName}</Title>
                  <MoreMenu
                     rootActiveClass="taskMenuActive"
                     items={itemsMenu}
                     placement="bottom-end"
                     appendTo={() => document.body}
                     onChange={handleSelectMenu}
                  >
                     <StyledButton className="taskActionBtn">
                        <Button className="taskActionBtn">
                           <Icon type="more" />
                        </Button>
                     </StyledButton>
                  </MoreMenu>
               </StyledTitle>
               <TaskInfo>
                  <TaskProperty>
                     <PathToolTip
                        title={IssueTypeCopy[task.taskTypeDetail.taskType]}
                        arrow
                     >
                        <IssueTypeIcon
                           type={`${task.taskTypeDetail.taskType}`}
                        />
                     </PathToolTip>

                     <PathToolTip
                        title={IssuePriorityCopy[task.priorityTask.priorityId]}
                        arrow
                     >
                        <IssuePriorityIcon
                           priority={`${task.priorityTask.priorityId}`}
                        />
                     </PathToolTip>
                  </TaskProperty>
                  <MemberAvatar>
                     <AvatarGroup
                        max={4}
                        total={task.assigness.length}
                        sx={{
                           "& .MuiAvatar-root": {
                              width: 20,
                              height: 20,
                              fontSize: 12,
                           },
                        }}
                        className="styledGroup"
                     >
                        {task.assigness.map((item) => (
                           <Avatar
                              className="memberAvatar"
                              avatarUrl={item.avatar}
                              alt={item.name}
                              size={24}
                              key={item.name}
                           />
                        ))}
                     </AvatarGroup>
                  </MemberAvatar>
               </TaskInfo>
            </StyledTaskItem>
         )}
      </Draggable>
   );
};

export default TaskItem;
