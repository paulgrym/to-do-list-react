import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null
  };
  return (
    <StyledButtons>
      <Button
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </Button>
      <Button
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </Button>
    </StyledButtons>
  )
};

export default Buttons;