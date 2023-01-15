import PropTypes from "prop-types";
import TaskItem from "./TaskItem/TaskItem";
import { Droppable } from "react-beautiful-dnd";

import { StyledTaskList } from "./Styles";

const propTypes = {
   taskList: PropTypes.object,
};

const TaskList = ({ taskList }) => {
   return (
      <Droppable droppableId={taskList?.statusId || "w1"}>
         {(provider) => (
            <StyledTaskList
               {...provider.droppableProps}
               ref={provider.innerRef}
            >
               {taskList?.lstTaskDeTail.map((task, index) => (
                  <TaskItem key={task.taskId} task={task} index={index} />
               ))}
               {provider.placeholder}
            </StyledTaskList>
         )}
      </Droppable>
   );
};

TaskList.propTypes = propTypes;

export default TaskList;
