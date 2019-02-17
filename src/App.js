import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cabeza from "./header";
import Carrito from "./Paginas/Carrito";

import Productos from "./Paginas/Productos";


class App extends Component {
  render() {
    return (
      <div id="cabeza">
        <BrowserRouter>
          <div>
            <Cabeza />
            <div>
              <p>aqui ira el home</p>
            </div>
            <Switch>
              <Route path="/" exact />
              <Route path="/Productos" component={Productos} exact />
              
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
