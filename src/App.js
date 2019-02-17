
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';
import Cabeza from "./header";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
import Productos from "./Paginas/Productos";
import Pie from "./footer";
import Home from "./Paginas/Home";


class App extends Component {

  render() {

    return (
      <div >

        <div id="cabeza">

          <BrowserRouter>
            <div>
              <Cabeza />
              <div>
                
              </div>
              <Switch>
                <Route path="/Home" component={Home}exact />
                <Route path="/Productos" component={Productos} exact />

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
