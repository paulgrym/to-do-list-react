import { StyledButtons, StyledButton } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
  if (tasks.length === 0) {
    return null
  };
  return (
    <StyledButtons>
      <StyledButton
        onClick={toggleHideDone}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </StyledButton>
    </StyledButtons>
  )
};

export default Buttons;