import './App.css';
import Heading from './Components/header';
import Home from './Components/Home';
import Data from './Components/Data';
import Compare from './Components/Compare';
import Graph from './Components/Graph'
import Help from './Components/Help'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App1">
    <Router>
    <Heading />
    <Switch>
    <Route path="/" exact component={() => <Home />} />
    <Route path="/data" exact component={()=> <Data />} />
    <Route path="/compare" exact component={()=> <Compare />} />
    <Route path="/graph" exact component={()=> <Graph />} />
    <Route path="/help" exact component={()=> <Help />} />
    </Switch>
    </Router>
    </div>
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */
  );
}

export default App;
