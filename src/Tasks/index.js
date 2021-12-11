import { StyledList, StyledItem, StyledContent, StyledButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledList>
    {tasks.map(task => (
      <StyledItem
        key={task.id}
        hidden={task.done && hideDone}
      >
        <StyledButton
          className="list__button"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✓" : ""}
        </StyledButton>
        <StyledContent done={task.done}>
          {task.content}
        </StyledContent>
        <StyledButton
          remove
          onClick={() => removeTask(task.id)}
        >
          🗑
        </StyledButton>
      </StyledItem>
    ))}
  </StyledList>
);

export default Tasks;