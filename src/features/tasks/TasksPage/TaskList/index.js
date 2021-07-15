import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button } from "./styled";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item key={task.id} hidden={task.done && hideDone}>
                    <Button toggleDone onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </Content>
                    <Button remove onClick={() => dispatch(removeTask(task.id))}>
                        &#128465;
                    </Button>
                </Item>
            ))}
        </List>
    )
};

export default TaskList;