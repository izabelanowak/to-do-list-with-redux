import { useSelector, useDispatch } from "react-redux";
import { Wrapper, Button } from "./styled";
import {
    toggleHideDone,
    setAllDone,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    fetchExampleTasks
} from "../../tasksSlice";

const Buttons = () => {
    const areAreTasksEmpty = useSelector(selectAreTasksEmpty);
    const isIsEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areAreTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isIsEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )
            }
        </Wrapper >
    )
};

export default Buttons;


