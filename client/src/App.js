import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search"
import Navbar from "./components/Navbar/Navbar"
import Saved from "./components/pages/Saved"
import { Jumbotron } from "react-bootstrap"
import image from "./images/background.jpg"



let style = {
  background: {
    backgroundAttachment: "fixed",
    height: "300px",
    backgroundImage: `url(${image})`,
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
    <div style={{background: "none"}}>
      <Router>
        <Navbar />
        <Jumbotron fluid style={style.background}>
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
