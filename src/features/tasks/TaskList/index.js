import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, ListItem, TaskContent, Button } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks)
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <ListItem
          key={task.id}
          hidden={task.done && hideDone}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </Button>
          <TaskContent done={task.done}>
            {task.content}
          </TaskContent>
          <Button
            remove
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default TaskList;