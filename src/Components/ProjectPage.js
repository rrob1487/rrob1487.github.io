import {MDBCol, MDBContainer, MDBIcon, MDBJumbotron, MDBRow} from "mdbreact"
import React, {Component} from "react"
import {ProjectObjects} from "./Projects"
import Carousel from "react-bootstrap/Carousel"
import {Link} from "react-router-dom"

class ProjectPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ProjectName: "Project Doesn't Exist",
            Pictures: ['unavailable.png'],
            ProjectDescription: "bop",
            DateFinished: "",
            Tools: "",
            Lessons: "",
            Link: null,
        }
        ProjectPage.updateState = ProjectPage.updateState.bind(this)
    }

    componentDidMount() {
        const {ProjectName} = this.props.match.params
        ProjectObjects.forEach((proj, index) => {
            //if(proj.ProjectName === this.props.ProjectName){
            if (proj.ProjectName === ProjectName) {
                //console.log(proj.ProjectName)
                this.setState(proj)
            }
        })
        this._isMounted = true
        //console.log("isMounted: ".concat(this._isMounted))

        //Scroll Page To Top
        window.scrollTo(0,0)
    }

    componentWillUnmount() {
        this._isMounted = false
        //console.log("isMounted: ".concat(this._isMounted))
    }


    static updateState(ProjectName) {
        ProjectObjects.forEach((proj, index) => {
            if (proj.ProjectName === ProjectName) {
                console.log(proj.ProjectName)
                console.log("isMounted: ".concat(this._isMounted))
                if (this._isMounted) {
                    this.setState(proj)
                }
            }
        })
    }
render() {
return (
    <div>
        <MDBContainer fluid className="elegant-color-dark">
            <br/>
            <Link to="" onClick={()=>this.props.history.goBack()}>back to all projects</Link>
            <MDBRow style={{height: "15vh"}}>
                <MDBCol>
                    <MDBContainer className="flex-center">
                        <h1 className="text-light ">{this.state.ProjectName}</h1>
                    </MDBContainer>
                </MDBCol>
                <MDBCol size="9"/>
            </MDBRow>
            <MDBRow center>
                <MDBCol md='10'>
                    <MDBJumbotron className="elegant-color z-depth-5">
                        <MDBRow center>
                            <MDBCol md="4">
                                <h2 className="text-light">Date Finished:</h2>
                                <p className="text-light">{this.state.DateFinished}</p>
                                <br/>
                                <h2 className="text-light">Project Description:</h2>
                                <p className="text-light">{this.state.ProjectDescription}</p>
                            </MDBCol>
                            <MDBCol className="pictures" md="6">
                                <Carousel controls={true}>
                                    {this.state.Pictures.map((pic) => (
                                        <Carousel.Item>
                                            <img height={"400vh"} width={"600vh"} project_picture z-depth-3
                                                 src={process.env.PUBLIC_URL.concat("/pictures/", pic)}
                                                alt={this.state.ProjectName}/>
                                        </Carousel.Item>
                                    ))}

                                </Carousel>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow center>
                            <MDBCol md="10">
                                <h2 className="text-light">The following is a list of tools used during this project:</h2>
                                <p className="text-light">{this.state.Tools}</p>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow center>
                            <MDBCol md="10">
                                <h2 className="text-light">Lessons Learned:</h2>
                                <p className="text-light">{this.state.Lessons}</p>
                            </MDBCol>
                        </MDBRow>
                        <br/>
                        <MDBRow center>
                            <MDBCol md="10">
                                <h2 className="text-light">Link To Code:</h2>
                                <p className="text-light">{this.state.Link ? <a target="_blank" rel="noopener noreferrer" href={this.state.Link}><MDBIcon fab icon="github"/> - {this.state.Link}</a>: "Link Unavailable"}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            <Link to="" onClick={()=>this.props.history.goBack()}>back to all projects</Link>
            <br/>
        </MDBContainer>
    </div>
)
}
}

export default ProjectPage