
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Cabeza from "./header";
import Carrito from "./Paginas/Carrito";
import Style from "./slick/slick.css"
import Productos from "./Paginas/Productos";
const $ = window.$;

class App extends Component {

  render() {

    return (

      <div id="cabeza">
        <link rel="stylesheet" type="text/css" href="slick/slick.css" />

        <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
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
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
        <script type="text/javascript" src="slick/slick.min.js"></script>
        <script type="text/javascript">
        
        $(document).ready(function(){
        $('.your-class').slick(
        )
        });
		
        </script>
      </div>

    )
  }
}

export default App;
