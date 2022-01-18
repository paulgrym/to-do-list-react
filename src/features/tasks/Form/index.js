import { nanoid } from "@reduxjs/toolkit";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Input, Button } from "./styled"
import { addTask } from "../tasksSlice";

const Form = () => {
  const dispatch = useDispatch();

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

    dispatch(addTask({
      content: newTaskContent,
      done: false,
      id: nanoid(),
    }))
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        autoFocus
      />
      <Button onClick={focusInput}>
        Dodaj zadanie
      </Button>
    </StyledForm>
  )
};

export default Form;