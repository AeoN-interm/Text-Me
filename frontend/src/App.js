import "./App.css";
import React from "react";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/chats" component={Chatpage} />
          <Redirect to="/" /> {/* Redirect any other route to Homepage */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
