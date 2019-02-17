import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cabeza from "./header";
import Carrito from "./Paginas/Carrito";
import Home from "./Paginas/Home";
import Productos from "./Paginas/Productos";


class App extends Component {
  render() {
    return (
      <div id="cabeza">
        <BrowserRouter>
          <div>
            <Cabeza />
            <Switch>
              <Route path="/Home" component={Home} exact />
              <Route path="/Productos" component={Productos} exact />
              <Route path="/Carrito" component={Carrito} exact />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
