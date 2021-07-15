import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { Item, List, StyledNav, StyledNavLink } from "./styled";

const App = () => (
    <HashRouter>
        <StyledNav>
            <List>
                <Item>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </Item>
            </List>
        </StyledNav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;