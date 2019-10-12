import React, { Component } from "react";
import {MDBCollapse, MDBIcon, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBNavItem, MDBNavLink} from "mdbreact";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import Experience from "./Experience";
import Home from "./Home"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    render() {
        return (
            <Router>
                <header>
                    <MDBNavbar color="elegant-color" dark expand="md">
                        <MDBNavbarBrand href="/">
                            <strong>Robbie Weinel</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick} />
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/Skills">Skills</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Hobbies">Hobbies</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Exp">Experience</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <h6 className="nav-link">robbie.weinel@gmail.com</h6>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://github.com/rrob1487"><MDBIcon fab icon="github" /></a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className="nav-link" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/robbie_weinel/"><MDBIcon fab icon="instagram" /></a>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/Skills">
                            <Skills props={this.props}/>
                        </Route>
                        <Route path="/Hobbies">
                            <Hobbies />
                        </Route>
                        <Route path="/Exp">
                            <Experience />
                        </Route>
                    </Switch>
                </header>
            </Router>);
    }
}


export default Header;