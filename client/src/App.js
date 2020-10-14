import React from 'react';
import './App.css';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
