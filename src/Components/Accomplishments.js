import React, {Component} from "react"
import {MDBCol, MDBContainer, MDBJumbotron, MDBRow} from "mdbreact"

class Accomplishments extends Component {
    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light">Accomplishments</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        <MDBRow center>
                            <MDBCol md='8'>
                                <MDBJumbotron className="elegant-color z-depth-5">

                                </MDBJumbotron>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}


export default Accomplishments