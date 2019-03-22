
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Cabeza from "./header";

import Productos from "./Paginas/Productos";
import Pie from "./footer";
import Home from "./Paginas/Home";
import Login from "./Paginas/Login";

class App extends Component {

  render() {
    console.log(this.props);
    return (
      <div >

        <div id="cabeza">

          <BrowserRouter>
            <div>
              <Cabeza />
              <div>
                
              </div>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/Home" component={Home}exact />
                <Route path="/Productos" component={Productos} exact />
                <Route path="/Login" component={Login}exact/>
              </Switch>
              
            </div>
          </BrowserRouter>

        </div>
        
        <Pie/>
      </div>
    )
  }
}

export default App;
