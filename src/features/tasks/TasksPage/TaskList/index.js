import { useSelector, useDispatch } from "react-redux";
import { toTask } from "../../../../routes";
import { toggleTaskDone, removeTask, selectHideDone, selectTaskByQuery } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, Content, Button, StyledLink } from "./styled";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
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
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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