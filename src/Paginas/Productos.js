import React, { Component } from 'react';
import {Button,Modal} from 'react-bootstrap'



class Productos extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false,
            text: '0',
        };
    }
    handleClose() {
        this.setState({ show: false ,text:0});
    }

    handleShow() {
        this.setState({ show: true });
    }
   
    onClickButton1 = () => {

        this.setState({
            text: parseFloat(this.state.text) + 40.51,
            

        });
        console.log(10+9);
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
                    <div class="col-10 mx-auto">
                        <div class="jumbotron">
                            <h1 class="display-3">
                                <p>Total a Pagar en LPS.</p>
                                <p id="total">{this.state.text}</p>
                            </h1>
                            <hr class="my-2"></hr>
                            <p class="lead">
                                <button type="button" class="btn btn-success" onClick={this.handleShow}>
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




                                <button type="button" class=" btn btn-danger" onClick={this.Borrar}>
                                    Empezar de Cero
                                </button>
                            </p>
                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://sc01.alicdn.com/kf/HTB11mmndBUSMeJjy1zj7630dXXaI/Promotional-High-Quality-Metal-Mechanical-Pencil.png_350x350.png" object-fit="cover" alt="imagen" ></img>
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
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton1} >Agregar al carrito  </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="https://lumen.com.mx/Content/Images/productPics/13358003.jpg?v=20181115232114" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>Lapiz Carbon Marca Patito</h1>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://www.escribirycorregir.com/wp-content/uploads/2018/10/boligrafos-lp-1.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://ojoporojo.cl/3739-home_default/bimoji-cambio-fine.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://images-na.ssl-images-amazon.com/images/I/613SfYxlbbL._SX355_.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://images-na.ssl-images-amazon.com/images/I/71YgNgujFuL._SL1500_.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://www.xeduced.com/wp-content/uploads/2016/03/Pentel-GraphGear.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://ae01.alicdn.com/kf/HTB1RHI5grSYBuNjSspiq6xNzpXaJ/4pcs-Set-Highlighter-Pens-Candy-Colors-Creative-Highlighter-Oblique-Coarse-Colour-Pencil-Graffiti-Marker-Pen-4.jpg_640x640.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1>HeadLiner Marca Patito 4colores</h1>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://cdn.bmstores.co.uk/images/hpcProductImage/imgFull/301357-Jumbo-Eraser-orange-21.jpg" object-fit="cover" alt="imagen" ></img>
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
                                    <img class="card-img-top" height="10%" width="100%" src="https://ae01.alicdn.com/kf/HTB1OCCfIFXXXXXBapXXq6xXFXXXv/FABER-CASTELL-0-5-0-7-MM-Portaminas-Plomo-HB-2B-L-piz-Mec-nico.jpg_640x640.jpg" object-fit="cover" alt="imagen" ></img>
                                    <div class="card-body">
                                        <div class="card-title">
                                            <h1> Minas 0.7, 0.5</h1>
                                        </div>
                                        <div class="card-subtitle">
                                            <h2>Lps. 15.50</h2>
                                        </div>
                                        <div class="card-text">
                                            PackMinas 0.7y0.5
                                    </div>
                                        <button type="button" class="btn-success btn btn-secondary" onClick={this.onClickButton10}>Agregar al carrito </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="card mb-4 box shadow">
                                    <img class="card-img-top" height="10%" width="100%" src="" object-fit="cover" alt="imagen" ></img>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        )

    }

}
export default Productos;