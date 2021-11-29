import { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {

  const [newTaskContent, setNewTaskContent] = useState("");

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
        placeholder="Co jest do zrobienia?" />
      <button className="form__button">Dodaj zadanie</button>
    </form>
  )
};

export default Form;