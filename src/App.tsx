import { Router, Route, Switch } from "react-router-dom";
import history from "./history";
import CasesContainer from "./containers/CasesContainer";
import VaccineContainer from "./containers/VaccineContainer";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={CasesContainer} />
          <Route path="/vaccines" exact component={VaccineContainer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
