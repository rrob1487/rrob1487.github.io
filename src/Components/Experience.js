import React, {Component} from "react"
import {MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBJumbotron, MDBRow} from "mdbreact"
import {Accordion, Button} from 'react-bootstrap'

class Experience extends Component {
    constructor(props) {
        super(props)
        Experience.createCardBodyComponent = Experience.createCardBodyComponent.bind(this)
        Experience.getColor = Experience.getColor.bind(this)
    }

    static getColor(index) {
        let color
        if (index % 2 === 0) {
            color = "bootstrapDark-1 text-light"
        } else {
            color = "bootstrapDark-2 text-light"
        }
        return color
    }

    static createCardBodyComponent(description, index) {
        return (
            <MDBCardBody className={Experience.getColor(index)}>
                <ul style={{paddingLeft: "8vh", paddingRight: "4vh"}}>
                    {description.map((desc) => <li>{desc}</li>)}
                </ul>
            </MDBCardBody>
        )
    }

    render() {
        return (
            <MDBContainer fluid className="elegant-color-dark">
                {/*Header*/}
                <MDBRow style={{height: "15vh"}}>
                    <MDBCol>
                        <MDBContainer className="flex-center">
                            <h1 className="text-light">Experience</h1>
                        </MDBContainer>
                    </MDBCol>
                    <MDBCol size="9"/>
                </MDBRow>
                <MDBRow center>
                    <MDBCol size="11">
                        <MDBJumbotron className="elegant-color z-depth-5">
                            <Accordion className="z-depth-5">
                                <MDBCard>

                                    {/*Regis*/}
                                    <MDBCardHeader className="bootstrapDark-1 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="0">
                                            The Regis Company - Modeling Intern (July 2019 - August 2019)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="0">
                                        {Experience.createCardBodyComponent([
                                            "Analyzed, documented, and helped to refactor a backend system with little to no guidence",
                                            "Worked efficiently and effectively within a fast passed scrum environment",
                                            "Demonstrated the ability to drive for results, deal with ambiguity, prioritize work based on changing business dynamics, " +
                                            "meet deadlines, and operate with personal and professional integrity"
                                        ], 0)}
                                    </Accordion.Collapse>
                                </MDBCard>

                                {/*Smash*/}
                                <MDBCard>
                                    <MDBCardHeader className="bootstrapDark-2 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="1">
                                            Smash Burger - Preparation/Cooking Staff (May 2018 - August 2018)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="1">
                                        {Experience.createCardBodyComponent([
                                            "Demonstrated strong workflow management skills as shown from my ability to keep up with demand during peek hours",
                                            "Showed proficiency in communication skills through my ability to communicate with a large diversity of people",
                                            "Was actively responsive and able to understand the needs of others to ensure delivery of the desired results"
                                        ], 1)}
                                    </Accordion.Collapse>
                                </MDBCard>

                                {/*Kings*/}
                                <MDBCard>
                                    <MDBCardHeader className="bootstrapDark-1 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="2">
                                            King Supers - Deli Clerk (July 2017 - September 2017)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="2">
                                        {Experience.createCardBodyComponent([
                                            "Analyzed differing daily situations and responded by adjusting and reassigning tasks",
                                            "Helped to resolve customer complaints in a professional and effective manor",
                                        ], 2)}
                                    </Accordion.Collapse>
                                </MDBCard>

                                {/*Radio*/}
                                <MDBCard>
                                    <MDBCardHeader className="bootstrapDark-2 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="3">
                                            Radio Shack - Sales Associate (June 2016 - August 2016)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="3">
                                        {Experience.createCardBodyComponent([
                                            "Demonstrated reliability when given additional responsibility such as training new staff and opening the store",
                                            "Displayed leadership skills and capabilities in both team and individual dynamics"
                                        ], 3)}
                                    </Accordion.Collapse>
                                </MDBCard>

                                {/*JP*/}
                                <MDBCard>
                                    <MDBCardHeader className="bootstrapDark-1 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="4">
                                            JP Total Landscaping - Crew Assistant (May 2015 - August 2015)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="4">
                                        {Experience.createCardBodyComponent([
                                            "Learned and adapted quickly as shown through my ability to replicate procedures after just one instruction",
                                        ], 4)}
                                    </Accordion.Collapse>
                                </MDBCard>

                                {/*Kittredge*/}
                                <MDBCard>
                                    <MDBCardHeader className="bootstrapDark-2 text-light">
                                        <Accordion.Toggle className="text-light" as={Button} variant="link"
                                                          eventKey="5">
                                            Kittredge Animal Clinic - Kennel Technician (May 2014 - March 2015)
                                        </Accordion.Toggle>
                                    </MDBCardHeader>
                                    <Accordion.Collapse eventKey="5">
                                        {Experience.createCardBodyComponent([
                                            "Assisted owner with varying specialized, technical, and physical responsibilities, even when those responsibilities were outside of the scope of the job",
                                        ], 5)}
                                    </Accordion.Collapse>
                                </MDBCard>
                            </Accordion>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
                <br/>
                <br/>
                <br/>
            </MDBContainer>
        )
    }
}


export default Experience