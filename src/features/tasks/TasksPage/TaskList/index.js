import { useDispatch, useSelector } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { List, ListItem, TaskContent, Button, StyledLink } from "./styled";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
            <StyledLink to={`/zadania/${task.id}`}>
              {task.content}
            </StyledLink>
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