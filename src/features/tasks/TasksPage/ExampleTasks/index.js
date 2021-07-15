import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";

const ExampleTasks = () => {
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading}
            >
                {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Wrapper >
    )
};

export default ExampleTasks;


