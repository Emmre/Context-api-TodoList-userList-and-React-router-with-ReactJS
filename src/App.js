import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Context from "./Context";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import TodoListPage from "./components/Todo";
import Detail from "./components/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Context>
      <Router>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/userlist" exact>
              <UserList />
            </Route>
            <Route path="/userlist/:id">
              <Detail />
            </Route>
            <Route path="/todolistpage">
              <TodoListPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Context>
  );
}
export default App;
