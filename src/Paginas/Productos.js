import React, { Component } from 'react';
import {Modal} from 'react-bootstrap'
import {lapices} from './lapices.json';
import firebase from 'firebase';
import '../App.css';

import { Card, CardBody, Button, CardTitle, CardText, CardImg} from 'reactstrap';


class Productos extends Component {
    constructor(props, context) {
        super();
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            text: '0',
            lapices,Temp:[]
        };

    }
    assignItem=precio=>{
        var temporal=String(precio)
        var precioVerdad=temporal.substring(5,temporal.length)
        console.log(precioVerdad);
        var price=parseFloat(precioVerdad);
            this.setState({
                text: parseFloat(this.state.text) + price,
            });
        
    }
    handleClose() {
        this.setState({ show: false ,text:0});
    }

    handleShow() {
        this.setState({ show: true });
    }

   
    Borrar = () => {
        this.setState({
            text: 0
        });
    }
    componentWillMount = ()=>{
        const nameref = firebase.database().ref('lapices')
        nameref.on('value',(snapshot)=>{
            var scores=snapshot.val()
            var keys = Object.keys(scores)
            var array =[]
            for(var i=0 ;i<keys.length;i++){
                var k=keys[i]
                var a=scores[k].Title
                var b=scores[k].Price
                var c=scores[k].Descripcion
                var d=scores[k].imagen 
                var arr = {
                    "Title":a,
                    "Price":b,
                    "Descripcion":c,
                    "imagen":d
                }
                array.push(arr)
                /*console.log(array)*/
            }
            this.setState({Temp: array})
        })
    }
    render() {
        const lapices =this.state.Temp.map((lapices,i) => {
            return(
                <div className="col-md-4">
                <div className="card mt-4">
                <Card>
                    <CardBody>
                        <CardImg top height="50%" width="50%" src={lapices.imagen}></CardImg>
                        <CardTitle>{lapices.Title}</CardTitle>
                        <CardText>{lapices.Descripcion}</CardText>
                        <CardText>{lapices.Price}</CardText>
                        <Button color="success" onClick={e=> this.assignItem(lapices.Price)}>Añadir al Carrito</Button>
                    </CardBody>
                </Card>
                </div>
                </div>
            )
        })
        return (
            <div>
                <div class="align-items-center h-100">
                    <div class="col-10 mx-auto">
                        <div class="jumbotron">
                            <h1 class="display-3">
                                <p>Total a Pagar en LPS.</p>
                                <p id="total">{this.state.text}</p>
                            </h1>
                            <hr class="my-2"></hr>
                            <p class="lead">
                                <button type="buttonProduct" class="btn btn-success" onClick={this.handleShow}>
                                    Proseguir con La Compra
                                </button>
                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title> Finalizacion De Compra</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Tu Total es de {this.state.text}<br>
                                    </br>
                                    Su pedido le llegara dentro de 5 Dias</Modal.Body>
                                    <Modal.Footer>
                                        
                                        <Button variant="primary" onClick={this.handleClose}>
                                            Gracias Por Su Compra</Button>
                                    </Modal.Footer>
                                </Modal>
                                <button type="buttonBorrar" class=" btn btn-danger" onClick={this.Borrar} >
                                    Empezar de Cero
                                </button>
                            </p>
                        </div>
                        <div class="row">
                            {lapices}
                            
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
                
            </div>
        )
    }
}
export default Productos;