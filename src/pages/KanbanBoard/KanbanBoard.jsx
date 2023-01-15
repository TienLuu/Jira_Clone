import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AvatarGroup, Tooltip } from "@mui/material";
import { DragDropContext } from "react-beautiful-dnd";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import GroupRemoveOutlinedIcon from "@mui/icons-material/GroupRemoveOutlined";

import useRequest from "../../hooks/useRequest";
import anothersAPI from "../../services/anothersAPI";
import projectAPI from "../../services/projectAPI";
import userAPI from "../../services/userAPI";
import { getProjectDetail, reOrderTask } from "../../slices/projectSlice";

import SearchBar from "../../components/SearchBar";
import Button from "../../components/Button";
import Avatar from "../../components/Avatar";
import MenuSelect from "../../components/MenuSelect";
import TaskList from "./TaskList";
import TaskDetailModal from "./TaskDetailModal";

import { showError, showSuccess } from "../../utils/toast";
import projectOwnerImg from "../../assets/images/meow.png";
import {
   GroupControl,
   CreatorAvatar,
   StyledSearchBar,
   GroupAvatar,
   ButtonControl,
   StyledButtonUser,
   MemberItem,
   StyledButtonRemove,
   StyledTitle,
   StyledContent,
   StatusColumn,
} from "./Styles";

const StyledTooltip = ({ ...passProp }) => (
   <Tooltip
      arrow
      PopperProps={{
         sx: {
            "& .MuiTooltip-tooltip": {
               fontSize: "13px",
            },
         },
      }}
      disableInteractive
      {...passProp}
   />
);

const KanbanBoard = () => {
   const { selectedProject } = useSelector((state) => state.project);
   const { users } = useSelector((state) => state.user);
   const { projectId } = useParams();
   const dispatch = useDispatch();

   const getIssueStatus = useRequest(anothersAPI.getTaskStatus);
   const taskNewModalRef = useRef();

   const handleAddUser = async (item) => {
      try {
         await projectAPI.addUserToProject({
            userId: item.userId,
            projectId: projectId,
         });

         showSuccess("Invited member to the project success");
         dispatch(getProjectDetail(projectId));
      } catch (error) {
         showError(error);
      }
   };

   const handleRemoveUser = async (item) => {
      try {
         await projectAPI.removeUserFromProject({
            userId: item.userId,
            projectId: projectId,
         });

         showSuccess("Removed member out of the project success");
         dispatch(getProjectDetail(projectId));
      } catch (error) {
         showError(error);
      }
   };

   const handleDropEnd = (result) => {
      const { destination, source, draggableId } = result;
      if (!destination) {
         return;
      }

      if (
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      ) {
         return;
      }

      dispatch(reOrderTask(result));
      projectAPI
         .updateTaskStatus({
            taskId: draggableId,
            statusId: destination.droppableId,
         })
         .then(() => {
            showSuccess("Update success");
         })
         .catch((error) => {
            showError(error);
            dispatch(getProjectDetail(projectId));
         });
   };

   return (
      <div>
         <StyledTitle>
            <h2>Kanban Board</h2>
         </StyledTitle>
         <GroupControl>
            <StyledSearchBar>
               <SearchBar />
            </StyledSearchBar>
            <CreatorAvatar>
               <Avatar
                  className="memberAvatar"
                  avatarUrl={projectOwnerImg}
                  alt={selectedProject?.creator.name + " ✨"}
               />
            </CreatorAvatar>
            <GroupAvatar>
               <MenuSelect
                  items={users || []}
                  maxRender={5}
                  serviceAPI={userAPI.getUsers}
                  renderItem={(item) => (
                     <MemberItem key={item.userId}>
                        <Avatar avatarUrl={item.avatar} size={24} />
                        <span>{item.name}</span>
                        {selectedProject?.members.find(
                           (member) => member.userId === item.userId
                        )
                           ? "✅"
                           : null}
                        {item.userId === selectedProject?.creator.id
                           ? " ✨ "
                           : null}
                     </MemberItem>
                  )}
                  onChange={handleAddUser}
                  getSearchKey={(item) => item.name}
                  getItemsKey={(item) => item.userId}
                  rootClass="manageUserBtn"
                  defaultPlaceHolder={
                     <StyledTooltip title="Add member">
                        <StyledButtonUser>
                           <PersonAddAltOutlinedIcon />
                        </StyledButtonUser>
                     </StyledTooltip>
                  }
               />
               <MenuSelect
                  items={selectedProject?.members || []}
                  maxRender={5}
                  renderItem={(item) => (
                     <MemberItem key={item.userId}>
                        <Avatar avatarUrl={item.avatar} size={24} />
                        <span>{item.name}</span>
                        {item.userId === selectedProject?.creator.id
                           ? " ✨ "
                           : null}
                        <StyledButtonRemove>
                           <Button
                              variant="danger"
                              iconSize={16}
                              icon="close"
                              onClick={() => {
                                 handleRemoveUser(item);
                              }}
                           ></Button>
                        </StyledButtonRemove>
                     </MemberItem>
                  )}
                  hideOnSelect={false}
                  getSearchKey={(item) => item.name}
                  getItemsKey={(item) => item.userId}
                  rootClass="manageUserBtn"
                  defaultPlaceHolder={
                     <StyledTooltip title="Remove member">
                        <StyledButtonUser>
                           <GroupRemoveOutlinedIcon />
                        </StyledButtonUser>
                     </StyledTooltip>
                  }
               />
               <AvatarGroup
                  total={selectedProject?.members.length}
                  sx={{
                     "& .MuiAvatar-root": {
                        width: 30,
                        height: 30,
                        fontSize: 14,
                     },
                  }}
                  className="styledGroup"
               >
                  {selectedProject?.members.map((item) => (
                     <Avatar
                        className="memberAvatar"
                        avatarUrl={item.avatar}
                        alt={item.name}
                        key={item.userId}
                     />
                  ))}
               </AvatarGroup>
            </GroupAvatar>
            <ButtonControl>
               <Button className="hightlight">Only My Issues</Button>
               <Button className="hightlight">Recently Update</Button>
            </ButtonControl>
         </GroupControl>
         <DragDropContext onDragEnd={handleDropEnd}>
            <StyledContent>
               {getIssueStatus.data?.map((status) => (
                  <StatusColumn key={status.statusId}>
                     <h3>{status.statusName}</h3>
                     <div>
                        <TaskList
                           taskList={selectedProject?.lstTask[status.statusId]}
                           taskNewModalRef={taskNewModalRef}
                        />
                     </div>
                  </StatusColumn>
               ))}
            </StyledContent>
         </DragDropContext>
         <TaskDetailModal />
      </div>
   );
};

export default KanbanBoard;
