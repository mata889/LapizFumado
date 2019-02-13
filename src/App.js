import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Cabeza from "./header";
import Carrito from "./Paginas/Carrito";
import Home from "./Paginas/Carrito";
import Productos from "./Paginas/Productos";
import Quienes from "./Paginas/Quienes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Cabeza />
          <Switch>
            <Route path="/Home" component ={Home} exact />
            <Route path="/Productos" component={Productos} exact />
            <Route path="/Carrito" component={Carrito} exact />
            <Route path="/Quienes" component={Quienes} exact />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
