import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import ModelS from "./pages/ModelS";
import Model3 from "./pages/Model3";
import ModelX from "./pages/ModelX";
import ModelY from "./pages/ModelY";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/modelS">
          <ModelS />
        </Route>
        <Route path="/model3">
          <Model3 />
        </Route>
        <Route path="/modelX">
          <ModelX />
        </Route>
        <Route path="/modelY">
          <ModelY />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
