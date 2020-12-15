import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import SoftPage from "./pages/softPage/SoftPage";
import CodePage from "./pages/codePage/CodePage";
import InstallPage from "./pages/installPage/InstallPage";
import ClonePage from "./pages/clonePage/ClonePage";
import CreateProjectPage from "./pages/createProjectPage/CreateProjectPage";
import BootstrapPage from "./pages/bootstrapPage/BootstrapPage";
import CssPage from "./pages/cssPage/CssPage";
import EventsPage from "./pages/eventsPage/EventsPage";
import StatePage from "./pages/statePage/StatePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/software" exact component={SoftPage} />
        <Route path="/code" exact component={CodePage} />
        <Route path="/install" exact component={InstallPage} />
        <Route path="/clone" exact component={ClonePage} />
        <Route path="/createproject" exact component={CreateProjectPage} />
        <Route path="/bootstrap" exact component={BootstrapPage} />
        <Route path="/css" exact component={CssPage} />
        <Route path="/events" exact component={EventsPage} />
        <Route path="/state" exact component={StatePage} />
      </Switch>
    </Router>
  );
}

export default App;
