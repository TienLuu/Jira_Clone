import TaskItem from "./TaskItem/TaskItem";
import { Droppable } from "react-beautiful-dnd";
import classnames from "classnames/bind";

import styles from "./TaskList.module.scss";
const cx = classnames.bind(styles);

const TaskList = ({ taskList }) => {
   return (
      <Droppable droppableId={taskList?.statusId || "w1"}>
         {(provider) => (
            <ul
               className={cx("taskList")}
               {...provider.droppableProps}
               ref={provider.innerRef}
            >
               {taskList?.lstTaskDeTail.map((task, index) => (
                  <TaskItem key={task.taskId} task={task} index={index} />
               ))}
               {provider.placeholder}
            </ul>
         )}
      </Droppable>
   );
};

export default TaskList;
