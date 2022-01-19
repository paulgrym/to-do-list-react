import { useDispatch, useSelector } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectIsEveryTaskUndone,
  selectHideDone,
  selectAreTasksEmpty
} from "../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskUndone = useSelector(selectIsEveryTaskUndone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  if (areTasksEmpty) {
    return null
  };
  return (
    <StyledButtons>
      <Button
        onClick={() => dispatch(toggleHideDone())}
        disabled={isEveryTaskUndone}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        onClick={() => dispatch(setAllDone())}
        disabled={isEveryTaskDone}
      >
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  )
};

export default Buttons;