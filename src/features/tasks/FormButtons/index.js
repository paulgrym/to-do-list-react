import { fetchExampleTasks } from "../tasksSlice"
import { useDispatch } from "react-redux";
import { Button, StyledButtons } from "../Buttons";

const FormButtons = () => {
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
      >
        Pobierz przykładowe zadania
      </Button>
    </StyledButtons>
  );
};

export default FormButtons;