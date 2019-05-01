import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search"
import Navbar from "./components/Navbar"
import Saved from "./components/pages/Saved"
import { Jumbotron } from "react-bootstrap"


let style = {
  background: {
    backgroundImage: 'url("./images/background.jpg")',
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    margin: "auto",
    display: "block"
  }
}

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Jumbotron fluid style={style.background}>
          <div>Testing</div>
        </Jumbotron>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  )
}


export default App;
