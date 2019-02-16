import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal,
    ModalHeader,
    ModalBody,
    Label,
    Input,
    Button,
    ModalFooter,
    Form,
    FormGroup,
} from "reactstrap";


export default class Cabeza extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="primary" light expand="md">
                    <NavbarBrand style={{ color: "white", fontWeight: "bolder", fontSize: "500" }} href="/">
                        <img alt="Logo" style={{ height: "fill", width: 100 }} src={require("./logo532x518.png")} />
                        PenAmazon</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto " navbar>
                            <NavItem>
                                <NavLink href="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Productos">Productos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Carrito">Carrito</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.instagram.com/matamorosss/">NuestroCreador</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="https://github.com/mata889/LapizFumado">MiGitHub</NavLink>
                            </NavItem>


                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}