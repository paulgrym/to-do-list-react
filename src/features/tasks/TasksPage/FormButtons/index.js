import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice"
import { useDispatch, useSelector } from "react-redux";
import { Button, StyledButtons } from "../Buttons";

const FormButtons = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button
        onClick={() => dispatch(fetchExampleTasks())}
        disabled={isLoading}
      >
        {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
      </Button>
    </StyledButtons>
  );
};

export default FormButtons;