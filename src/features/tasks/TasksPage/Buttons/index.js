import { useSelector, useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import Button from "../Button";

import {
    toggleHideDone,
    setAllDone,
    setAllUnDone,
    removeAllTasks,
    selectAreTasksEmpty,
    selectIsEveryTaskDone,
    selectIsEveryTaskUnDone,
    selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isEveryTaskUnDone = useSelector(selectIsEveryTaskUnDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskUnDone}
                        onClick={() => dispatch(setAllUnDone())}
                    >
                        Odznacz wszystkie
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                    <Button
                        disabled={areTasksEmpty}
                        onClick={() => dispatch(removeAllTasks())}
                    >
                        Usuń wszystkie
                    </Button>
                </>
            )
            }
        </Wrapper>
    )
};

export default Buttons;


