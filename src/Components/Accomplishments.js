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
                            <h1 className="text-light">About Me</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        <MDBRow center>
                            <MDBCol md='8'>
                                <MDBJumbotron className="elegant-color z-depth-5">
                                    <MDBRow center>
                                        <MDBCol md="7" sm="12">
                                            <p className="text-light indent-text" >
                                                Hi my name is Robbie Weinel, my pronouns are he/him, and I'm a developer
                                                and business professional from Colorado.
                                                I graduated from Colorado State University in December 2019 with a
                                                double major in computer science and business administration with a
                                                concentration in computer information systems.
                                                If I had to pick 5 words to describe myself, they would be: competitor,
                                                inventor, intreprenuer, autotelic, and team-player.
                                                I am interested in job opportunities in security, research, system
                                                administration, system architecture, and backend/fullstack development. I'm also
                                                interested in any projects
                                                related to machine learning, blockchain, robotics, or any job where I
                                                can
                                                help to make a positive impact on the environment. Please contact me
                                                with any
                                                job opportunities or questions, my contact information is in the page
                                                header.

                                            </p>
                                        </MDBCol>
                                        <MDBCol md="5" sm="12">
                                            <img style= {{marginTop: "8vh"}} src={process.env.PUBLIC_URL + '/pictures/me.jpg'}
                                                 alt={this.props.title}
                                                 className="img-fluid z-depth-3"/>
                                            <br/><br/>
                                        </MDBCol>
                                    </MDBRow>
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