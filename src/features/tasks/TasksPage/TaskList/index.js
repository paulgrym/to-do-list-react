import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectTasks, selectHideDone } from "../../tasksSlice";
import { List, ListItem, TaskContent, Button } from "./styled";
import {Link} from "react-router-dom";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
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
            {task.done ? "✔" : ""}
          </Button>
          <TaskContent done={task.done}>
            <Link to={`/zadania/${task.id}`}>
              {task.content}
            </Link>
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