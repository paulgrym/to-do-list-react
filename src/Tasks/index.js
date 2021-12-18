import { List, ListItem, TaskContent, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <ListItem
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </Button>
        <TaskContent done={task.done}>
          {task.content}
        </TaskContent>
        <Button
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </Button>
      </ListItem>
    ))}
  </List>
);

export default Tasks;