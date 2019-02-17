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
            <div class="your-class">
              <div><img src="https://cdn.pixabay.com/photo/2015/07/02/10/40/writing-828911_960_720.jpg" alt=""></img></div>
              <div><img src="http://dailypost.ng/wp-content/uploads/2016/02/pencils.jpg" alt=""></img></div>
              <div><img src="https://partysupplyfactory.com/wp-content/uploads/2017/04/81vygUugWRL._SL1500_.jpg" alt=""></img></div>
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
