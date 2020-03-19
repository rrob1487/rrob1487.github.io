import React, {Component} from "react"
import {
    MDBCol,
    MDBJumbotron,
    MDBRow
} from "mdbreact"
import ReactWOW from "react-wow"
import {Link} from "react-router-dom"

class BasicCard extends Component {
    render() {
        return (
            <ReactWOW animation="fadeInLeft">
                <MDBRow center>
                    <MDBCol md='8'>
                        <MDBJumbotron className="elegant-color z-depth-5">
                            <MDBRow center>
                                <MDBCol md="8">
                                    <h2 className="text-light">{this.props.title}</h2>
                                    {this.props.date ? <h6 className="text-light">Date Finished: {this.props.date}</h6> : <div/>}
                                    {this.props.picture ?
                                        <img src={this.props.picture} alt={this.props.title} className="img-fluid z-depth-3"/> : <div />
                                    }

                                    <br/><br/>
                                    <p className="text-light">
                                        {this.props.description}
                                    </p>

                                    <br/>
                                    {this.props.more ? <Link to={"/Projects/".concat(this.props.title)}>read more</Link> : <div/>}
                                </MDBCol>
                            </MDBRow>
                        </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
            </ReactWOW>
        )
    }
}


export default BasicCard