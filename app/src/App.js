import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom'; 
import Volunteer from './Volunteer';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}


      <Switch>
        <Route path="/volunteer">
          <Volunteer /> 
        </Route>
      </Switch>
    </div>
  );
}

export default App;
