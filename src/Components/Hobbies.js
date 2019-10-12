import React, {Component} from "react"
import {MDBCol, MDBContainer, MDBJumbotron,MDBRow} from "mdbreact"

class Hobbies extends Component {
    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light">Hobbies</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        {/*Table*/}
                        <MDBJumbotron className="elegant-color">
                            <MDBContainer>
                            </MDBContainer>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}


export default Hobbies