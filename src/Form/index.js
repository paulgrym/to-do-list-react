import { useState, useRef } from "react";
import "./style.css";

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
    <form className="form" onSubmit={onFormSubmit}>
      <input
        value={newTaskContent}
        onChange={(event) => setNewTaskContent(event.target.value)}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
      />
      <button
        className="form__button"
        onClick={focusInput}
      >
        Dodaj zadanie
      </button>
    </form>
  )
};

export default Form;