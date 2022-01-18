import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  if (tasks.length === 0) {
    return null
  };
  return (
    <StyledButtons>
      <Button
        onClick={() => dispatch(toggleHideDone())}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={() => dispatch(setAllDone())}
      >
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  )
};

export default Buttons;