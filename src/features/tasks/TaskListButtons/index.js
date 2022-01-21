import { useDispatch, useSelector } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectIsEveryTaskDone,
  selectIsEveryTaskUndone,
  selectHideDone,
  selectAreTasksEmpty,
} from "../tasksSlice";
import { Button, StyledButtons } from "../Buttons"

const TaskListButtons = () => {
  const hideDone = useSelector(selectHideDone);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const isEveryTaskUndone = useSelector(selectIsEveryTaskUndone);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      {!areTasksEmpty && (
        <>
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
        </>
      )}
    </StyledButtons>
  )
};

export default TaskListButtons;