import { useState, useRef } from "react";
import { StyledForm, StyledInput, StyledButton } from "./styled"

const Form = ({ addNewTask }) => {

  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const trimmedNewTaskContent = newTaskContent.trim();
    if (trimmedNewTaskContent === "") {
      return;
    };
    addNewTask(trimmedNewTaskContent);
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledInput
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        autoFocus
      />
      <StyledButton onClick={focusInput}>
        Dodaj zadanie
      </StyledButton>
    </StyledForm>
  )
};

export default Form;