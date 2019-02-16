import React, { Component } from 'react';
import { ListGroup, Form, FormGroup, Input, Button, Row, Col } from "reactstrap";
import { Tab, Sonnet } from 'react-bootstrap';

class Productos extends Component {
    state = {
        text: '0'
    }
    onClickButton1 = () => {
        this.setState({
            text: parseInt(this.state.text) + 40.51
        });
    }
    onClickButton2 = () => {
        this.setState({
            text: parseInt(this.state.text) + 7.50
        });
    }
    onClickButton3 = () => {
        this.setState({
            text: parseInt(this.state.text) + 10.50
        });
    }
    onClickButton4 = () => {
        this.setState({
            text: parseInt(this.state.text) + 12.50
        });
    }
    onClickButton5 = () => {
        this.setState({
            text: parseInt(this.state.text) + 10.50
        });
    }
    onClickButton6 = () => {
        this.setState({
            text: parseInt(this.state.text) + 15.50
        });
    }
    onClickButton7 = () => {
        this.setState({
            text: parseInt(this.state.text) + 10.50
        });
    }
    onClickButton8 = () => {
        this.setState({
            text: parseInt(this.state.text) + 25.51
        });
    }
    onClickButton9 = () => {
        this.setState({
            text: parseInt(this.state.text) + 20.50
        });
    }
    onClickButton10 = () => {
        this.setState({
            text: parseInt(this.state.text) + 15.50
        });
    }
    Borrar = () => {
        this.setState({
            text: 0
        });
    }

    render() {
        return (
            <div>
                <div class="align-items-center h-100">
                    <div class="col-50 mx-auto">
                        <div class="jumbotron">
                            <h1 class="display-3">
                                <p>Total a Pagar en LPS.</p>
                                <p id="total">{this.state.text}</p>
                            </h1>
                            <hr class="my-2"></hr>
                            <p class="lead">
                                <button type="button" class="btn btn-success" >
                                    Proseguir con La Compra
                                </button>
                                <button type="button" class=" btn btn-danger" onClick={this.Borrar}>
                                    Empezar de Cero
                                </button>
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Mecanico MarkII</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2 id={this.precio1}>Lps. 40.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Este lapiz mecanico es conocido por su calidad y precision.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton1}>Agregar al carrito  </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Cabron Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 7.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Lapiz Carbon Reconocido en el mundo como la cuspide de los lapices carbon.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton2}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Tinta Negro Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 10.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Clasico Lapiz Tinta Negro, para oficina,trabajos y colegio.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton3}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Tinta Verde Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 12.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Lapiz Tinta Verde Perfecto para subrayar.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton4}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Tinta Azul Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 10.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Clasico Lapiz Tinta Azul, para oficina,trabajos y colegio.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton5}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Tinta Rojo Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 15.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Clasico Lapiz Tinta Rojo, para oficina,trabajos y colegio.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton6}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Mina Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 10.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Para los que no les gusta el carbon el lapiz Mina es el que sigue en la lista.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton7}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Highlighter Marca Patito</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 25.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Marcador Especificamente para subrayar aquellos datos importantes.
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton8}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Borrador</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 20.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Artefacto Para borrar carbon o mina
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton9}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://i.kym-cdn.com/entries/icons/facebook/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Pack de Minas 0.7 y de 0.5</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 15.50</h2>
                                        </div>
                                        <div class="card-text">
                                            Para que solo comprar minas de uno solo, si se puede comprar el pack de un solo
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton10}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <script>

                </script>
            </div>

        )
    }

}
export default Productos;