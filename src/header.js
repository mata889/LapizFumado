import React from "react";
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";
import { Route, Switch } from "react-router-dom";
//import Productos from './Paginas/Productos';
import firebase from 'firebase';


export default class Cabeza extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            search: "",
            Temp: []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: "/search/" + event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(this.state.search);
        event.preventDefault();
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentWillMount = () => {
        const nameref = firebase.database().ref('lapices')
        nameref.on('value', (snapshot) => {
            var scores = snapshot.val()
            var keys = Object.keys(scores)
            var array = []
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i]
                var a = scores[k].Title
                var b = scores[k].Price
                var c = scores[k].Descripcion
                var d = scores[k].imagen
                var arr = {
                    "Title": a,
                    "Price": b,
                    "Descripcion": c,
                    "imagen": d
                }
                array.push(arr)
                /*console.log(array)*/
            }
            this.setState({ Temp: array })
        })
    }
    render() {
        return (
            <div>
                <Navbar color="secondary" light expand="md">
                    <NavbarBrand style={{ color: "white", fontWeight: "bolder", fontSize: "500" }} href="/">
                        <img alt="Logo" style={{ height: "fill", width: 100 }} src={require("./logo532x518.png")} />
                        PenAmazon</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Container>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/Home">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/Productos">Productos</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://www.instagram.com/matamorosss/" alt="insta">NuestroCreador</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink href="https://github.com/mata889/LapizFumado" alt="github de la pagina">MiGitHub</NavLink>
                                </NavItem>
                                <form class="form-inline" action="/action_page.php" onSubmit={this.handleSubmit}>
                                    <input class="form-control mr-sm-2" name="search" type="text" placeholder="Search" onChange={this.handleChange} />
                                    <li class="nav-item active">
                                        <a class="nav-link"  href={this.state.search} className="buttn2">Search</a>
                                    </li>
                                </form>
                                <NavItem>
                                    <NavLink href="/Login" alt="Login para miembros premium">Login</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
                <Switch>
                    <Route path="/search/:ser" render={
                        ({match})=> {
                            const Temp = this.state.Temp.map((todos, i) => {
                                console.log(todos)
                                return (
                                            (todos.Title.includes(match.params.ser)) ?
                                                <div className="col-md-4">
                                                    <div className="card mt-4">
                                                        <Card >
                                                            <CardBody>
                                                                <CardImg top height="50%" width="50%" src={todos.imagen}></CardImg>
                                                                <CardTitle>{todos.Title}</CardTitle>
                                                                <CardText>{todos.Descripcion}</CardText>
                                                                <CardText>{todos.price}</CardText>
                                                            </CardBody>
                                                        </Card>
                                                    </div>
                                                </div>:""
                                )
                            })
                            return (
                                <div className="container">
                                    <div className="row mt-4">
                                        {Temp}
                                    </div>
                                </div>
                            )
                        }
                    }/>
                </Switch>
            </div>
        );
    }
}