import Form from "./Form";
import TaskList from "./TaskList";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import FormButtons from "./FormButtons";
import TaskListButtons from "./TaskListButtons";
import Search from "./Search";

const TasksPage = () => {

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FormButtons />}
      />

      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<TaskListButtons />}
      />
    </Container>
  );
}

export default TasksPage;
