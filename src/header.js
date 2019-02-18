import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from "reactstrap";
import { Button, FormControl, Form } from 'react-bootstrap'



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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/Home">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/Productos">Productos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://www.instagram.com/matamorosss/">NuestroCreador</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="https://github.com/mata889/LapizFumado">MiGitHub</NavLink>
                            </NavItem>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="info">Search</Button>
                            </Form>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}