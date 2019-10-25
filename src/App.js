import React, {Component} from "react";
import "./index.css";
import Application from "./Components/Application";
import {MDBContainer, MDBFooter} from "mdbreact"

class App extends Component {
    render() {
        return (
            <div>
                <Application/>
                <MDBFooter color="elegant-color">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: Robbie Weinel
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        )
    }
}

export default App
