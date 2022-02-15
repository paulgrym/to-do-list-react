import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container";
import { useParams } from "react-router-dom";
import { getTaskById } from "../tasksSlice";
import { useSelector } from "react-redux";
import { TaskContent } from "./styled";

const TaskPage = () => {
  const params = useParams();
  const task = useSelector(state => getTaskById(state, params.id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania"}
        body={
          <TaskContent>
            {!!task && (
              <>
                <p>
                  <strong>Ukończono:&nbsp;</strong> {task.done ? "Tak" : "Nie"}
                </p>
                <p>
                  <strong>Data dodania:&nbsp;</strong>{task.addDate}
                </p>
              </>
            )}
          </TaskContent>
        }
      />
    </Container>
  );
}

export default TaskPage;
