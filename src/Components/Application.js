import React, {Component} from "react"
import {
    MDBCollapse,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink, MDBSideNavLink
} from "mdbreact"
import {HashRouter as Router, Switch, Route,} from "react-router-dom"
import Skills from "./Skills"
import Hobbies from "./Hobbies"
import Experience from "./Experience"
import Home from "./Home"
import {Projects, ProjectObjects} from "./Projects"
import ProjectPage from "./ProjectPage"
import Accomplishments from "./Accomplishments";

class Application extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false,
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        })
    }

    update(name) {
        if (ProjectPage) {
            ProjectPage.updateState(name);
        }
    }

    render() {
        return (
            <Router>
                <header>
                    <MDBNavbar color="elegant-color" dark expand="md">
                        <MDBNavbarBrand href="/">
                            <strong>Robbie Weinel</strong>
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.onClick}/>
                        <MDBCollapse isOpen={this.state.collapse} navbar>
                            <MDBNavbarNav left>
                                <MDBNavItem>
                                    <MDBNavLink to="/Projects">Projects</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Exp">Experience</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Skills">Skills</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Hobbies">Hobbies</MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink to="/Accomplishments">Accomplishments</MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <h6 className="nav-link">robbie.weinel@gmail.com</h6>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className="nav-link" target="_blank" rel="noopener noreferrer"
                                       href="https://github.com/rrob1487"><MDBIcon fab icon="github"/></a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className="nav-link" target="_blank" rel="noopener noreferrer"
                                       href="https://www.linkedin.com/in/robbie-weinel-0013911a2/"><MDBIcon fab
                                                                                                            icon="linkedin"/></a>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <a className="nav-link" target="_blank" rel="noopener noreferrer"
                                       href="https://www.instagram.com/robbie_weinel/"><MDBIcon fab
                                                                                                icon="instagram"/></a>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/Skills">
                            <Skills props={this.props}/>
                        </Route>
                        <Route path="/Hobbies">
                            <Hobbies/>
                        </Route>
                        <Route path="/Exp">
                            <Experience/>
                        </Route>
                        <Route path="/Accomplishments">
                            <Accomplishments/>
                        </Route>
                        <Route exact path="/Projects">
                            <Projects/>
                        </Route>
                        {<Route exact path="/Projects/:ProjectName" component={ProjectPage}/>}

                    </Switch>
                </header>
            </Router>)
    }
}


export default Application