import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container";
import FormButtons from "./FormButtons";
import TaskListButtons from "./TaskListButtons";

const Tasks = () => {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FormButtons />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<TaskListButtons />}
      />
    </Container>
  );
}

export default Tasks;
