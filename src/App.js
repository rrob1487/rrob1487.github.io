import React, {Component} from "react";
import "./index.css";
import Header from "./Components/Header";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/*
                <MDBContainer>
                    <MDBRow center style={{height: "100vh"}}>
                        <MDBCol middle="true" sm="8" className="text-center">
                            <h1>Welcome to Your MDB React App</h1>
                            <p className="mb-2">The application is configured and ready to import our components.</p>
                            <MDBBtn href="https://mdbootstrap.com/docs/react/" target="blank"
                                    color="light-blue"><strong>Check out our docs!</strong></MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                */}
            </div>
        )
    }
}

export default App
